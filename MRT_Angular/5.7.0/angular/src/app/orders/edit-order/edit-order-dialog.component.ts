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
  OrderServiceProxy,
  OrderDto, RestaurantDtoPagedResultDto, RestaurantServiceProxy, RestaurantDto, OrderStatusDto, OrderStatusDtoPagedResultDto, OrderStatusServiceProxy
} from '../../../shared/service-proxies/service-proxies';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  templateUrl: 'edit-order-dialog.component.html'
})
export class EditOrderDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  order: OrderDto = new OrderDto();
  id: number;
  sUserId:string;
  iUserId:number;
  currentDate;
  restaurants: RestaurantDto[] = [];
  orderStatusses: OrderStatusDto[]=[];

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _orderService: OrderServiceProxy,
    public _restaurantService: RestaurantServiceProxy,
    public _orderStatusService : OrderStatusServiceProxy,
    public sessionService: AppSessionService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._orderService.get(this.id).subscribe((result: OrderDto) => {
      this.order = result;
    });
    this.sUserId = localStorage.getItem('userId');
    this.iUserId = this.sessionService.userId;
    this.currentDate = new Date().toISOString().substring(0, 16);
     console.log(this.currentDate);

    this._restaurantService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('pipe');
      })
    )
    .subscribe((result: RestaurantDtoPagedResultDto) => {
      this.restaurants = result.items;
      //this.showPaging(result, pageNumber);
    });

    this._orderStatusService
    .getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log(this.iUserId);
      })
    )
    .subscribe((result: OrderStatusDtoPagedResultDto) => {
      this.orderStatusses = result.items;
      //this.showPaging(result, pageNumber);
    });
  }

  save(): void {
    this.saving = true;

    this._orderService
      .update(this.order)
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
