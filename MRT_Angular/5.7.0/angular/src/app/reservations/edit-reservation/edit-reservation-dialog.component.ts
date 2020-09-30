import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '../../../shared/app-component-base';
import {
  ReservationServiceProxy,
  ReservationDto
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'edit-reservation-dialog.component.html'
})
export class EditReservationDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  reservation: ReservationDto = new ReservationDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _reservationService: ReservationServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._reservationService.get(this.id).subscribe((result: ReservationDto) => {
      this.reservation = result;
    });
  }

  save(): void {
    this.saving = true;

    this._reservationService
      .update(this.reservation)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      });
  }
}
