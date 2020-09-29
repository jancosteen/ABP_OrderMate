import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  MenuItemPriceServiceProxy,
  MenuItemPriceDto,
  MenuItemPriceDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateMenuItemPriceDialogComponent } from './create-menuItemPrice/create-menuItemPrice-dialog.component';
import { EditMenuItemPriceDialogComponent } from './edit-menuItemPrice/edit-menuItemPrice-dialog.component';

class PagedMenuItemPricesRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './menuItemPrices.component.html',
  animations: [appModuleAnimation()]
})
export class MenuItemPricesComponent extends PagedListingComponentBase<MenuItemPriceDto> {
  menuItemPrices: MenuItemPriceDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _menuItemPriceService: MenuItemPriceServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedMenuItemPricesRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

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
        this.showPaging(result, pageNumber);
      });
  }

  delete(menuItemPrice: MenuItemPriceDto): void {
    abp.message.confirm(
      this.l('MenuItemPriceDeleteWarningMessage', menuItemPrice.menuItemPrice1),
      undefined,
      (result: boolean) => {
        if (result) {
          this._menuItemPriceService
            .delete(menuItemPrice.id)
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
  }

  createMenuItemPrice(): void {
    this.showCreateOrEditMenuItemPriceDialog();
  }

  editMenuItemPrice(menuItemPrice: MenuItemPriceDto): void {
    this.showCreateOrEditMenuItemPriceDialog(menuItemPrice.id);
  }

  showCreateOrEditMenuItemPriceDialog(id?: number): void {
    let createOrEditMenuItemPriceDialog: BsModalRef;
    if (!id) {
      createOrEditMenuItemPriceDialog = this._modalService.show(
        CreateMenuItemPriceDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditMenuItemPriceDialog = this._modalService.show(
        EditMenuItemPriceDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditMenuItemPriceDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
