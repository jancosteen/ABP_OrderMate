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
  OrderDto,
  OrderServiceProxy,
  OrderStatusDto,
  OrderStatusDtoPagedResultDto,
  OrderStatusServiceProxy,
  RestaurantDto,
  RestaurantDtoPagedResultDto,
  RestaurantServiceProxy
} from '../../../shared/service-proxies/service-proxies';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  templateUrl: 'create-order-dialog.component.html'
})
export class CreateOrderDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  order: OrderDto = new OrderDto();
  restaurants: RestaurantDto[] = [];
  orderStatusses: OrderStatusDto[]=[];
  currentDate;
  sUserId:string;
  iUserId:number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _orderService: OrderServiceProxy,
    public _restaurantService: RestaurantServiceProxy,
    public _orderStatusService: OrderStatusServiceProxy,
    public bsModalRef: BsModalRef,
    public sessionService: AppSessionService
  ) {
    super(injector);
  }

  ngOnInit(): void {
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
      .create(this.order)
      .pipe(
        finalize(() => {
          this.saving = false;
          console.log(this.order)
        })
      )
      .subscribe(() => {

        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      });
  }
}
