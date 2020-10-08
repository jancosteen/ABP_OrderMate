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
  QrCodeServiceProxy,
  QrCodeDto
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'edit-qrCode-dialog.component.html'
})
export class EditQrCodeDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  qrCode: QrCodeDto = new QrCodeDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _qrCodeService: QrCodeServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._qrCodeService.get(this.id).subscribe((result: QrCodeDto) => {
      this.qrCode = result;
    });
  }

  save(): void {
    this.saving = true;

    this._qrCodeService
      .update(this.qrCode)
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
