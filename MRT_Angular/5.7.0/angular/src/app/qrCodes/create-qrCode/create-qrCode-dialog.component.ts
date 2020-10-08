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
  QrCodeDto,
  QrCodeServiceProxy
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'create-qrCode-dialog.component.html'
})
export class CreateQrCodeDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  qrCode: QrCodeDto = new QrCodeDto();


  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _qrCodeService: QrCodeServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {

  }

  save(): void {
    this.saving = true;

    this._qrCodeService
      .create(this.qrCode)
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
