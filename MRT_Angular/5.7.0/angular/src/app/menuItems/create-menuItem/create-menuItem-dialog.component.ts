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
  AllergyDto,
  AllergyDtoPagedResultDto,
  AllergyServiceProxy,
  MenuItemAllergyDto,
  MenuItemAllergyServiceProxy,
  MenuItemCategoryDto,
  MenuItemCategoryDtoPagedResultDto,
  MenuItemCategoryServiceProxy,
  MenuItemDto,
  MenuItemPriceDto,
  MenuItemPriceDtoPagedResultDto,
  MenuItemPriceServiceProxy,
  MenuItemServiceProxy
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'create-menuItem-dialog.component.html'
})
export class CreateMenuItemDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  menuItem: MenuItemDto = new MenuItemDto();
  menuItemPrices: MenuItemPriceDto[]=[];
  menuItemCategories: MenuItemCategoryDto[]=[];
  allergies: AllergyDto[]=[];
  menuItemAllergy: MenuItemAllergyDto = new MenuItemAllergyDto();


  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _menuItemService: MenuItemServiceProxy,
    public _menuItemPriceService: MenuItemPriceServiceProxy,
    public _menuItemCategoryService: MenuItemCategoryServiceProxy,
    public _allergyService: AllergyServiceProxy,
    public _menuItemAllergyService: MenuItemAllergyServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._allergyService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('allergies');
      })
    )
    .subscribe((result: AllergyDtoPagedResultDto) => {
      this.allergies = result.items;
      //this.showPaging(result, pageNumber);
    });

    this._menuItemCategoryService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('categories');
      })
    )
    .subscribe((result: MenuItemCategoryDtoPagedResultDto) => {
      this.menuItemCategories = result.items;
      //this.showPaging(result, pageNumber);
    });

    this._menuItemPriceService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('prices');
      })
    )
    .subscribe((result: MenuItemPriceDtoPagedResultDto) => {
      this.menuItemPrices = result.items;
      //this.showPaging(result, pageNumber);
    });
  }

  save(): void {
    this.saving = true;

    this._menuItemService
      .create(this.menuItem)
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

      this._menuItemAllergyService
      .create(this.menuItemAllergy)
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
