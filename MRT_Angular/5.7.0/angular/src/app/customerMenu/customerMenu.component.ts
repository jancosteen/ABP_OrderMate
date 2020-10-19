import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import{BehaviorSubject} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '@shared/app-component-base';
import {
  MenuServiceProxy,
  MenuDto, RestaurantServiceProxy, RestaurantDtoPagedResultDto, RestaurantDto, MenuItemServiceProxy, MenuItemDto, MenuItemDtoPagedResultDto, MenuItemAllergyServiceProxy, MenuItemAllergyDto, MenuDtoPagedResultDto, MenuItemCategoryDto
} from '@shared/service-proxies/service-proxies';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { AppSessionService } from '@shared/session/app-session.service';
import { ThrowStmt } from '@angular/compiler';
import { CartModalComponent } from './cart-modal/cartModal.component';



class PagedMenuItemRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

class Cart{
  menuItemId:number;
  name:string;
  price:number;
  qty:number;
  total:number;
}

@Component({
  templateUrl: 'customerMenu.component.html'
})
export class CustomerMenuComponent extends PagedListingComponentBase<MenuItemDto>{

  saving = false;
  menu: MenuDto = new MenuDto();
  Iid: number;
  restaurants: RestaurantDto[]=[];
  restautrant: RestaurantDto = new RestaurantDto();
  restaurantdIdFk:number;
  menuItems: MenuItemDto[]=[];
  menus:MenuDto[]=[];
  linkedMenuItems:MenuItemDto[]=[];
  menuId:number;
  menuItemAllergies: MenuItemAllergyDto[]=[];
  miAllergyIds:MenuItemAllergyDto[] = [];
  public searchText:string;
  loading:boolean = true;
  advancedFiltersVisible = false;
  finalMenuItems:MenuItemDto[]=[];
  restaurant:RestaurantDto = new RestaurantDto();
  miMains:MenuItemDto[]=[];
  miPizzas:MenuItemDto[]=[];
  miDesserts:MenuItemDto[]=[];
  miStarters:MenuItemDto[]=[];
  cartCount:number=0;
  cart=[];
  cartItem:Cart=new Cart();
  startQty:number = 0;

  cart3 = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _menuService: MenuServiceProxy,
    public _restaurantService: RestaurantServiceProxy,
    private activeRoute: ActivatedRoute,
    private _router: Router,
    public _menuItemService:MenuItemServiceProxy,
    public __menuItemAllergyService: MenuItemAllergyServiceProxy,
    private _modalService: BsModalService,
    private _sessionService: AppSessionService

  ) {
    super(injector);
  }

  list(
    request: PagedMenuItemRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = '';

    let id: string = this.activeRoute.snapshot.params['id'];
    this.Iid =+ id;
    this._menuService.getMenuByResId(this.Iid).subscribe((result: MenuDtoPagedResultDto) => {
      this.menus = result.items;
      this.restaurantdIdFk = this.menus[0].restaurantIdFk;
      //this.menuId = this.menus[0].id;
      this.restaurant = this.menus[0].restaurantIdFkNavigation;
      this.populateMenuItems(this.menus[0]);
    });

    this.cartCount = 0;
    this.cart3 = this._sessionService.getCart();
    this.cartCount = this._sessionService.getCartItemCount();
    this.cart = [];
  }

  addToOrder(item){
      this._sessionService.addProduct(item);
      this.cartCount = this._sessionService.getCartItemCount();
  }


  populateMenuItems(menu:MenuDto){
      this.finalMenuItems= [];
      this.miStarters = [];
      this.miPizzas = [];
      this.miMains = [];
      this.miDesserts = [];
      this.finalMenuItems = menu.menuItem;

      for(let x=0;x<this.finalMenuItems.length;x++){
        if(this.finalMenuItems[x].menuItemCategoryIdFk === 2){
          this.miPizzas.push(this.finalMenuItems[x]);
        }else if(this.finalMenuItems[x].menuItemCategoryIdFk === 3){
          this.miMains.push(this.finalMenuItems[x]);
        }else if(this.finalMenuItems[x].menuItemCategoryIdFk === 4){
          this.miDesserts.push(this.finalMenuItems[x]);
        }else if(this.finalMenuItems[x].menuItemCategoryIdFk === 5){
          this.miStarters.push(this.finalMenuItems[x]);
        }
      }

      console.log("pizzas", this.miPizzas);
      console.log("Mains", this.miMains);
      console.log("Desserts", this.miDesserts);
      console.log("starters", this.miStarters);
  }

  delete(menuItem: MenuItemDto): void {
    this.__menuItemAllergyService.getAllergyByMenuItemId(menuItem.id).subscribe((result) => {
      this.menuItemAllergies = result.items;
      this.miAllergyIds = this.menuItemAllergies});

    abp.message.confirm(
      this.l('MenuItemDeleteWarningMessage', menuItem.menuItemName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._menuItemService
            .delete(menuItem.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                //location.reload();

              })
            )
            .subscribe(() => {});
        }
      }
    );
    for(let x=0; x<this.miAllergyIds.length;x++){
      this.__menuItemAllergyService
      .delete(this.miAllergyIds[x].id)
      .pipe(
        finalize(() => {
          console.log('deleted mia', this.miAllergyIds[x].id);
        })
      )
      .subscribe(() => {});
    }

  }

  createMenuItemCategory(): void {
    this.showCreateOrEditMenuItemCategoryDialog();
  }

  editMenuItemCategory(menuItemCategory: MenuItemCategoryDto): void {
    this.showCreateOrEditMenuItemCategoryDialog(menuItemCategory.id);
  }

  showCreateOrEditMenuItemCategoryDialog(id?: number): void {
    let createOrEditMenuItemCategoryDialog: BsModalRef;
    if (!id) {
      createOrEditMenuItemCategoryDialog = this._modalService.show(
        CartModalComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditMenuItemCategoryDialog = this._modalService.show(
        CartModalComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditMenuItemCategoryDialog.content.onSave.subscribe(() => {
      this.cartCount = this._sessionService.getCartItemCount();
    });
  }



}
