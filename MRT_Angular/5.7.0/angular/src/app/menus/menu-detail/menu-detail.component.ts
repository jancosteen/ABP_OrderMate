import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '../../../shared/app-component-base';
import {
  MenuServiceProxy,
  MenuDto, RestaurantServiceProxy, RestaurantDtoPagedResultDto, RestaurantDto, MenuItemServiceProxy, MenuItemDto, MenuItemDtoPagedResultDto, MenuItemAllergyServiceProxy, MenuItemAllergyDto
} from '../../../shared/service-proxies/service-proxies';
import { EditMenuItemDialogComponent } from '../../menuItems/edit-menuItem/edit-menuItem-dialog.component';
import { CreateMenuItemDialogComponent } from '../../menuItems/create-menuItem/create-menuItem-dialog.component';
import { EditMenuDialogComponent } from '../edit-menu/edit-menu-dialog.component';
import { CreateMenuDialogComponent } from '../create-menu/create-menu-dialog.component';




@Component({
  templateUrl: 'menu-detail.component.html'
})
export class MenuDetailComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  menu: MenuDto = new MenuDto();
  Iid: number;
  restaurants: RestaurantDto[]=[];
  restautrant: RestaurantDto = new RestaurantDto();
  restaurantdIdFk:number;
  menuItems: MenuItemDto[]=[];
  linkedMenuItems:MenuItemDto[]=[];
  menuId:number;
  menuItemAllergies: MenuItemAllergyDto[]=[];
  miAllergyIds:MenuItemAllergyDto[] = [];
  public searchText:string;
  loading:boolean = true;
  advancedFiltersVisible = false;



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

  ) {
    super(injector);
  }

  ngOnInit(): void {
    let id: string = this.activeRoute.snapshot.params['id'];
    this.Iid =+ id;
    this._menuService.get(this.Iid).subscribe((result: MenuDto) => {
      this.menu = result;
      this.restaurantdIdFk = this.menu.restaurantIdFk;
      this.menuId = this.menu.id;
    });

    this._restaurantService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('Restaurant pipe');
      })
    )
    .subscribe((result: RestaurantDtoPagedResultDto) => {
      this.restaurants = result.items;
      this.getRestaurant(this.restaurantdIdFk);
      //this.showPaging(result, pageNumber);
    });

    this.getAllMenuItems();

  }

  save(): void {
    this.saving = true;

    this._menuService
      .update(this.menu)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
      });
  }

  getRestaurant(resId){
    for(let x=0;x<this.restaurants.length;x++){
      if(resId==this.restaurants[x].id){
        this.restautrant=this.restaurants[x];
        console.log(resId,this.restaurants[x]);
      }
    }
  }

  getAllMenuItems(){
    this._menuItemService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('menuItems pipe');
      })
    )
    .subscribe((result: MenuItemDtoPagedResultDto) => {
      this.menuItems = result.items;
      this.getMenuItems(this.menuId);
      //this.showPaging(result, pageNumber);
    });
  }

  getMenuItems(mId){
    console.log(this.menuItems,mId);
    for(let x=0;x<this.menuItems.length;x++){
      if(mId==this.menuItems[x].menuIdFk){
        this.linkedMenuItems.push(this.menuItems[x]);
        console.log(mId,this.linkedMenuItems[x]);
      }
    }
    this.loading = false;
  }

  delete(menuItem: MenuItemDto): void {
    this.__menuItemAllergyService.getByMenuItemId(menuItem.id).subscribe((result: MenuItemAllergyDto[]) => {
      this.menuItemAllergies = result;
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
                this.getAllMenuItems();
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

  createMenuItem(): void {
    this.showCreateOrEditMenuItemDialog();
  }

  editMenuItem(menuItem: MenuItemDto): void {
    this.showCreateOrEditMenuItemDialog(menuItem.id);
  }

  showCreateOrEditMenuItemDialog(id?: number): void {
    let createOrEditMenuItemDialog: BsModalRef;
    if (!id) {
      createOrEditMenuItemDialog = this._modalService.show(
        CreateMenuItemDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditMenuItemDialog = this._modalService.show(
        EditMenuItemDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditMenuItemDialog.content.onSave.subscribe(() => {
      //location.reload();
      this.getAllMenuItems();
    });
  }

  editMenu(menu: MenuDto): void {
    this.showCreateOrEditMenuDialog(menu.id);
  }

  showCreateOrEditMenuDialog(id?: number): void {
    let createOrEditMenuDialog: BsModalRef;
    if (!id) {
      createOrEditMenuDialog = this._modalService.show(
        CreateMenuDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditMenuDialog = this._modalService.show(
        EditMenuDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditMenuDialog.content.onSave.subscribe(() => {
      let id: string = this.activeRoute.snapshot.params['id'];
      this.Iid =+ id;
      this._menuService.get(this.Iid).subscribe((result: MenuDto) => {
      this.menu = result;
      this.restaurantdIdFk = this.menu.restaurantIdFk;
      this.menuId = this.menu.id;
    });
    });
  }

  viewMenuItem(menuItem:MenuItemDto): void {
    const detailsUrl: string = `/app/menuItem/${menuItem.id}`;
    this._router.navigate([detailsUrl]);
  }


}
