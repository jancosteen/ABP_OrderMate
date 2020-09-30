import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  ReservationStatusServiceProxy,
  ReservationStatusDto,
  ReservationStatusDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateReservationStatusDialogComponent } from './create-reservationStatus/create-reservationStatus-dialog.component';
import { EditReservationStatusDialogComponent } from './edit-reservationStatus/edit-reservationStatus-dialog.component';

class PagedReservationStatussRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './reservationStatusses.component.html',
  animations: [appModuleAnimation()]
})
export class ReservationStatussesComponent extends PagedListingComponentBase<ReservationStatusDto> {
  reservationStatuss: ReservationStatusDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;
  public searchText:string;

  constructor(
    injector: Injector,
    private _reservationStatusService: ReservationStatusServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedReservationStatussRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._reservationStatusService
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
      .subscribe((result: ReservationStatusDtoPagedResultDto) => {
        this.reservationStatuss = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(reservationStatus: ReservationStatusDto): void {
    abp.message.confirm(
      this.l('ReservationStatusDeleteWarningMessage', reservationStatus.reservationStatus1),
      undefined,
      (result: boolean) => {
        if (result) {
          this._reservationStatusService
            .delete(reservationStatus.id)
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

  createReservationStatus(): void {
    this.showCreateOrEditReservationStatusDialog();
  }

  editReservationStatus(reservationStatus: ReservationStatusDto): void {
    this.showCreateOrEditReservationStatusDialog(reservationStatus.id);
  }

  showCreateOrEditReservationStatusDialog(id?: number): void {
    let createOrEditReservationStatusDialog: BsModalRef;
    if (!id) {
      createOrEditReservationStatusDialog = this._modalService.show(
        CreateReservationStatusDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditReservationStatusDialog = this._modalService.show(
        EditReservationStatusDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditReservationStatusDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
