import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  ReservationServiceProxy,
  ReservationDto,
  ReservationDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateReservationDialogComponent } from './create-reservation/create-reservation-dialog.component';
import { EditReservationDialogComponent } from './edit-reservation/edit-reservation-dialog.component';

class PagedReservationsRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './reservations.component.html',
  animations: [appModuleAnimation()]
})
export class ReservationsComponent extends PagedListingComponentBase<ReservationDto> {
  reservations: ReservationDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _reservationService: ReservationServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedReservationsRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._reservationService
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
      .subscribe((result: ReservationDtoPagedResultDto) => {
        this.reservations = result.items;
        this.showPaging(result, pageNumber);
      });
      console.log(this.appSession.userId);
  }

  delete(reservation: ReservationDto): void {
    abp.message.confirm(
      this.l('ReservationDeleteWarningMessage', reservation.id),
      undefined,
      (result: boolean) => {
        if (result) {
          this._reservationService
            .delete(reservation.id)
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

  createReservation(): void {
    this.showCreateOrEditReservationDialog();
  }

  editReservation(reservation: ReservationDto): void {
    this.showCreateOrEditReservationDialog(reservation.id);
  }

  showCreateOrEditReservationDialog(id?: number): void {
    let createOrEditReservationDialog: BsModalRef;
    if (!id) {
      createOrEditReservationDialog = this._modalService.show(
        CreateReservationDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditReservationDialog = this._modalService.show(
        EditReservationDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditReservationDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
