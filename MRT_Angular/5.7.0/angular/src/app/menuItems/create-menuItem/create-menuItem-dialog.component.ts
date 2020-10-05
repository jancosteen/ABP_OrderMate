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
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'create-menuItem-dialog.component.html'
})
export class CreateMenuItemDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  menuItem: MenuItemDto = new MenuItemDto();
  menuItemPrices: MenuItemPriceDto[]=[];
  menuItemCategories: MenuItemCategoryDto[]=[];
  menuItemId:number;
  allergies: AllergyDto[]=[];
  miAllergies:[];
  menuItemAllergy: MenuItemAllergyDto = new MenuItemAllergyDto();
  form: FormGroup;
  allergyIds:any=[];
  allergyId:number;

  get allergiesFormArray(){
    return this.form.controls.allergiesF as FormArray;
  }

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _menuItemService: MenuItemServiceProxy,
    public _menuItemPriceService: MenuItemPriceServiceProxy,
    public _menuItemCategoryService: MenuItemCategoryServiceProxy,
    public _allergyService: AllergyServiceProxy,
    public _menuItemAllergyService: MenuItemAllergyServiceProxy,
    public bsModalRef: BsModalRef,
    private fb: FormBuilder
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
      console.log(this.allergies);
      //this.showPaging(result, pageNumber);
    });

    this.form = this.fb.group({
      allergiesF:new FormArray([])
    });
     this.addCheckBoxes();

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

  private addCheckBoxes(){
    this.allergies.forEach(() => this.allergiesFormArray.push(new FormControl(false)));
  }

  show(id){
      this.allergyIds.push(id);
      console.log('add',this.allergyIds);
      var count = 0
    for(let x=0;x<this.allergyIds.length;x++){
      if(id == this.allergyIds[x]){
        var index1:number;
        var index2:number;
        count++
        if(count == 2){
           index1 = this.allergyIds.indexOf(id);
           delete this.allergyIds[index1];
           index2 = this.allergyIds.indexOf(id);
           delete this.allergyIds[index2];
          console.log('delete',this.allergyIds);
        }
    }
  }
  var filtered = this.allergyIds.filter(function (el){
    return el !=null;
  });
  console.log('final', filtered);

  }
  submit(){
    const selectedAllergyIds = this.form.value.allergiesF
        .map((checked, i) => checked ? this.allergies[i].id : null)
        .filter(v => v !==null);
        console.log(selectedAllergyIds);
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
        this.menuItemId = this.menuItem.id;
        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();

      });

      this.menuItemAllergy.menuItemIdFk = this.menuItemId;
      //this.menuItemAllergy.allergyIdFk =
      console.log(this.miAllergies);

      /*this._menuItemAllergyService
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
      });*/
  }
}
