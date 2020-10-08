import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  SeatingServiceProxy,
  SeatingDto,
  SeatingDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateSeatingDialogComponent } from './create-seating/create-seating-dialog.component';
import { EditSeatingDialogComponent } from './edit-seating/edit-seating-dialog.component';

class PagedSeatingsRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './seatings.component.html',
  animations: [appModuleAnimation()]
})
export class SeatingsComponent extends PagedListingComponentBase<SeatingDto> {
  seatings: SeatingDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;
  public searchText: string;

  constructor(
    injector: Injector,
    private _seatingService: SeatingServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedSeatingsRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._seatingService
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
      .subscribe((result: SeatingDtoPagedResultDto) => {
        this.seatings = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(seating: SeatingDto): void {
    abp.message.confirm(
      this.l('SeatingDeleteWarningMessage', seating.id),
      undefined,
      (result: boolean) => {
        if (result) {
          this._seatingService
            .delete(seating.id)
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

  createSeating(): void {
    this.showCreateOrEditSeatingDialog();
  }

  editSeating(seating: SeatingDto): void {
    this.showCreateOrEditSeatingDialog(seating.id);
  }

  showCreateOrEditSeatingDialog(id?: number): void {
    let createOrEditSeatingDialog: BsModalRef;
    if (!id) {
      createOrEditSeatingDialog = this._modalService.show(
        CreateSeatingDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditSeatingDialog = this._modalService.show(
        EditSeatingDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditSeatingDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
