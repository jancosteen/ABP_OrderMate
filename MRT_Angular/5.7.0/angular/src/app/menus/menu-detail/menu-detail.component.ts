import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
//import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '../../../shared/app-component-base';
import {
  MenuServiceProxy,
  MenuDto, RestaurantServiceProxy, RestaurantDtoPagedResultDto, RestaurantDto
} from '../../../shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'menu-detail.component.html'
})
export class MenuDetailComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  menu: MenuDto = new MenuDto();
  Iid: number;
  restaurants: RestaurantDto[]=[];
  restautrant: RestaurantDto = new RestaurantDto();
  restaurantdIdFk:number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _menuService: MenuServiceProxy,
    public _restaurantService: RestaurantServiceProxy,
    private activeRoute: ActivatedRoute,
    private router: Router
    //public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    let id: string = this.activeRoute.snapshot.params['id'];
    this.Iid =+ id;
    this._menuService.get(this.Iid).subscribe((result: MenuDto) => {
      this.menu = result;
      this.restaurantdIdFk = this.menu.restaurantIdFk;
    });

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
      this.getRestaurant(this.restaurantdIdFk);
      //this.showPaging(result, pageNumber);
    });




  }

  save(): void {
    this.saving = true;

    this._menuService
      .update(this.menu)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
      });
  }

  getRestaurant(resId){
    for(let x=0;x<this.restaurants.length;x++){
      if(resId==this.restaurants[x].id){
        this.restautrant=this.restaurants[x];
        console.log(resId,this.restaurants[x]);
      }
    }
  }
}
