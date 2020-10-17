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
  ConfigurationServiceProxy,
  MenuItemDto,
  MenuItemDtoPagedResultDto,
  MenuItemServiceProxy,
  OrderLineDto,
  OrderLineServiceProxy
} from '../../../shared/service-proxies/service-proxies';

export class lineAmount{
  menuItem:MenuItemDto;
  itemQty?:number;
  total?:number;
}

@Component({
  templateUrl: 'create-orderLine-dialog.component.html'
})

export class CreateOrderLineDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  orderLine: OrderLineDto = new OrderLineDto();
  addedOrderLine: OrderLineDto = new OrderLineDto();
  menuItems: MenuItemDto[]=[];
  public searchText: string;
  loading = true;
  selectedMenuItems: MenuItemDto[]=[];
  selectedOL:OrderLineDto[]=[];
  lineAmounts : lineAmount[]=[];
  lineAmount: lineAmount = new lineAmount();
  orderId:number;
  itemQuantity:number;
  clicked = false;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _orderLineService: OrderLineServiceProxy,
    //public bsModalRef: BsModalRef,
    public _menuItemService: MenuItemServiceProxy
  ) {
    super(injector);
  }

  ngOnInit(): void {
    localStorage.clear();
    this.orderId =+ localStorage.getItem('orderId')


    this._menuItemService
      .getAll(
        '',
        0,
        1000
      )
      .pipe(
        finalize(() => {
          console.log('menuItemsPipe');
        })
      )
      .subscribe((result: MenuItemDtoPagedResultDto) => {
        this.menuItems = result.items;
        this.loading = false;
        console.log(this.menuItems);

      });



  }

  addItem(item: MenuItemDto, ItemQty){

      this.lineAmount.menuItem = item;
      this.lineAmount.itemQty = ItemQty;
      this.lineAmount.total = this.lineAmount.menuItem.menuItemPriceIdFkNavigation.menuItemPrice1 * ItemQty;

      console.log('lineAmount',this.lineAmount);
      this.lineAmounts.push(this.lineAmount);
      console.log(this.lineAmounts);




  }

  removeItem(item){
    for(let x=0;x<this.lineAmounts.length;x++){
      if(item.menuItem.id == this.lineAmounts[x].menuItem.id){
        this.lineAmounts.splice(x,1);
      }
      console.log(this.lineAmounts);
    }
  }

  save(): void {
    this.saving = true;

    this.orderLine.orderIdFk = this.orderId;
    this.orderLine.menuItemIdFk = this.selectedMenuItems[0].id;
    this.orderLine.userIdFk = this.appSession.userId;

    this._orderLineService
      .create(this.orderLine)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));

      });
  }



}
