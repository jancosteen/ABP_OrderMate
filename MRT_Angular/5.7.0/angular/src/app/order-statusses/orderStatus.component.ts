import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  OrderStatusServiceProxy,
  OrderStatusDto,
  OrderStatusDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateOrderStatusDialogComponent } from './create-orderStatus/create-orderStatus-dialog.component';
import { EditOrderStatusDialogComponent } from './edit-orderStatus/edit-orderStatus-dialog.component';

class PagedOrderStatussRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './orderStatus.component.html',
  animations: [appModuleAnimation()]
})
export class OrderStatussesComponent extends PagedListingComponentBase<OrderStatusDto> {
  orderStatuss: OrderStatusDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _orderStatusService: OrderStatusServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedOrderStatussRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._orderStatusService
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
      .subscribe((result: OrderStatusDtoPagedResultDto) => {
        this.orderStatuss = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(orderStatus: OrderStatusDto): void {
    abp.message.confirm(
      this.l('OrderStatusDeleteWarningMessage', orderStatus.orderStatus1),
      undefined,
      (result: boolean) => {
        if (result) {
          this._orderStatusService
            .delete(orderStatus.id)
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

  createOrderStatus(): void {
    this.showCreateOrEditOrderStatusDialog();
  }

  editOrderStatus(orderStatus: OrderStatusDto): void {
    this.showCreateOrEditOrderStatusDialog(orderStatus.id);
  }

  showCreateOrEditOrderStatusDialog(id?: number): void {
    let createOrEditOrderStatusDialog: BsModalRef;
    if (!id) {
      createOrEditOrderStatusDialog = this._modalService.show(
        CreateOrderStatusDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditOrderStatusDialog = this._modalService.show(
        EditOrderStatusDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditOrderStatusDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
