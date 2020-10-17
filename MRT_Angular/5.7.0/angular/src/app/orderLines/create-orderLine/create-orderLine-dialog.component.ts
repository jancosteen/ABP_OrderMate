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
  menuItems: MenuItemDto[]=[];
  public searchText: string;
  loading = true;
  selectedMenuItems: MenuItemDto[]=[];
  selectedOL:OrderLineDto[]=[];
  lineAmounts : lineAmount[]=[];
  lineAmount: lineAmount = new lineAmount();
  orderId:number;
  itemQuantity:number;

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
        this.populatedLineAmount();
      });



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

  populatedLineAmount(){
    for(let x=0;this.menuItems.length;x++){
      this.lineAmount.menuItem = this.menuItems[x];
      this.lineAmount.itemQty = 0;
      this.lineAmount.total = 0;
      this.lineAmounts.push(this.lineAmount);
    }
    console.log('pop',this.lineAmounts);
  }

  addToOrderLine(item, qty){
    this.lineAmount.menuItem = item;
    this.lineAmount.itemQty = qty;
    this.lineAmount.total = this.lineAmount.menuItem.menuItemPriceIdFkNavigation.menuItemPrice1 * qty;
    this.lineAmounts.push(this.lineAmount);
    console.log('lineAmouns',this.lineAmounts);
    console.log('MenuItem', this.lineAmounts[0].menuItem.menuItemName);
  }

}
