import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  MenuItemServiceProxy,
  MenuItemDto,
  MenuItemDtoPagedResultDto, MenuItemPriceDto, MenuItemCategoryDto, MenuItemPriceServiceProxy, MenuItemCategoryServiceProxy, MenuItemPriceDtoPagedResultDto, MenuItemCategoryDtoPagedResultDto, MenuItemAllergyServiceProxy, MenuItemAllergyDto
} from '../../shared/service-proxies/service-proxies';
import { CreateMenuItemDialogComponent } from './create-menuItem/create-menuItem-dialog.component';
import { EditMenuItemDialogComponent } from './edit-menuItem/edit-menuItem-dialog.component';
import { Router } from '@angular/router';

class PagedMenuItemsRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './menuItems.component.html',
  animations: [appModuleAnimation()],
  selector: 'app-menuItems'
})
export class MenuItemsComponent extends PagedListingComponentBase<MenuItemDto> {
  menuItems: MenuItemDto[] = [];
  menuItemPrices: MenuItemPriceDto[] = [];
  menuItemCategories: MenuItemCategoryDto[]=[];
  menuItemAllergies: MenuItemAllergyDto[]=[];
  miAllergyIds:MenuItemAllergyDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;
  public searchText: string;

  constructor(
    injector: Injector,
    private _menuItemService: MenuItemServiceProxy,
    private _menuItemPriceService: MenuItemPriceServiceProxy,
    private _menuItemCategoryService: MenuItemCategoryServiceProxy,
    private __menuItemAllergyService: MenuItemAllergyServiceProxy,
    private _modalService: BsModalService,
    private _router: Router
  ) {
    super(injector);
  }

  list(
    request: PagedMenuItemsRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._menuItemService
      .getAll(
        request.keyword,
        request.skipCount,
        request.maxResultCount
      )
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: MenuItemDtoPagedResultDto) => {
        this.menuItems = result.items;
        this.showPaging(result, pageNumber);
      });

      this._menuItemPriceService
      .getAll(
        request.keyword,
        request.skipCount,
        request.maxResultCount
      )
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: MenuItemPriceDtoPagedResultDto) => {
        this.menuItemPrices = result.items;
        //this.showPaging(result, pageNumber);
      });

      this._menuItemCategoryService
      .getAll(
        request.keyword,
        request.skipCount,
        request.maxResultCount
      )
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: MenuItemCategoryDtoPagedResultDto) => {
        this.menuItemCategories = result.items;
        //this.showPaging(result, pageNumber);
      });

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
                this.refresh();
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
      this.refresh();
    });
  }

  viewMenuItem(res:MenuItemDto): void {
    const detailsUrl: string = `/app/menuItem/${res.id}`;
    this._router.navigate([detailsUrl]);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
