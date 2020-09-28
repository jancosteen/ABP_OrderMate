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
  RestaurantDto,
  RestaurantDtoPagedResultDto,
  RestaurantImageDto,
  RestaurantImageServiceProxy,
  RestaurantServiceProxy
} from '../../../shared/service-proxies/service-proxies';
import { PagedRequestDto } from '@shared/paged-listing-component-base';

class PagedRestaurantsRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: 'create-restaurantImage-dialog.component.html'
})
export class CreateRestaurantImageDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  restaurantImage: RestaurantImageDto = new RestaurantImageDto();
  restaurants: RestaurantDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;
  selectedFile: File = null;
  request: PagedRestaurantsRequestDto;
  pageNumber: number;
  finishedCallback: Function;



  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _restaurantImageService: RestaurantImageServiceProxy,
    private _restaurantService: RestaurantServiceProxy,

    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._restaurantService.getAll(
      '',
      0,
      100
    )
    .pipe(
      finalize(() => {
        console.log('finalize');
      })
    ).subscribe((result: RestaurantDtoPagedResultDto) => {
      this.restaurants = result.items;
      console.log(result);
      //this.showPaging(result, pageNumber);
    });

  }





  onFileChanged(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  save(): void {
    this.saving = true;

    this._restaurantImageService
      .create(this.restaurantImage)
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
