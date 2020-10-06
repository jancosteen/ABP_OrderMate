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
  MenuItemDto, MenuItemCategoryDtoPagedResultDto, MenuItemCategoryServiceProxy, MenuItemCategoryDto, MenuItemPriceDto, MenuItemPriceServiceProxy, MenuItemPriceDtoPagedResultDto, MenuItemAllergyServiceProxy, MenuItemAllergyDto, AllergyDto, AllergyServiceProxy, AllergyDtoPagedResultDto
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'edit-menuItem-dialog.component.html'
})
export class EditMenuItemDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  menuItem: MenuItemDto = new MenuItemDto();
  id: number;
  menuItemCategories: MenuItemCategoryDto[]=[];
  menuItemPrices: MenuItemPriceDto[]=[];
  menuItemAllergies: MenuItemAllergyDto[]=[];
  allergies: AllergyDto[]=[];
  allergyIds=[];
  allergyIds2=[];
  filtered=[];

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _menuItemService: MenuItemServiceProxy,
    public bsModalRef: BsModalRef,
    public _allergiesService: AllergyServiceProxy,
    public _menuItemCategoryService: MenuItemCategoryServiceProxy,
    public _menuItemPriceService: MenuItemPriceServiceProxy,
    public _menuItemAllergyService: MenuItemAllergyServiceProxy
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._menuItemService.get(this.id).subscribe((result: MenuItemDto) => {
      this.menuItem = result;
    });

    this._menuItemAllergyService.getByMenuItemId(this.id).subscribe((result: MenuItemAllergyDto[]) => {
      this.menuItemAllergies = result;
      this.allergyIds = this.menuItemAllergies;
      console.log(this.allergyIds);
      //this.populateAllergyIds(result);
    });


    this._allergiesService
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

  populateAllergyIds(res){
    for(let x=0;x<res.length;x++){
      this.allergyIds2.push(res[x].allergyIdFk);
    }
    console.log('populated allergyIds',this.allergyIds2)
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

  show(id){
    this.allergyIds2.push(id);
    console.log('add',this.allergyIds2);
    var count = 0
  for(let x=0;x<this.allergyIds2.length;x++){
    if(id == this.allergyIds2[x]){
      var index1:number;
      var index2:number;
      count++
      if(count == 2){
         index1 = this.allergyIds2.indexOf(id);
         delete this.allergyIds2[index1];
         index2 = this.allergyIds2.indexOf(id);
         delete this.allergyIds2[index2];
        console.log('delete',this.allergyIds2);
      }
  }
}
this.filtered = this.allergyIds2.filter(function (el){
  return el !=null;
});
console.log('final', this.filtered);
}
}
