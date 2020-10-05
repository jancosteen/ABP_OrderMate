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
  MenuItemServiceProxy,
  MenuItemDto
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'edit-menuItem-dialog.component.html'
})
export class EditMenuItemDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  menuItem: MenuItemDto = new MenuItemDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _menuItemService: MenuItemServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._menuItemService.get(this.id).subscribe((result: MenuItemDto) => {
      this.menuItem = result;
    });
  }

  save(): void {
    this.saving = true;

    this._menuItemService
      .update(this.menuItem)
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
