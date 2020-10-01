import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  RestaurantServiceProxy,
  RestaurantDto,
  RestaurantDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateRestaurantDialogComponent } from './create-restaurant/create-restaurant-dialog.component';
import { EditRestaurantDialogComponent } from './edit-restaurant/edit-restaurant-dialog.component';

class PagedRestaurantsRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './restaurants.component.html',
  animations: [appModuleAnimation()]
})
export class RestaurantsComponent extends PagedListingComponentBase<RestaurantDto> {
  restaurants: RestaurantDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;
  searchText:string;

  constructor(
    injector: Injector,
    private _restaurantService: RestaurantServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedRestaurantsRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._restaurantService
      .getAll(
        request.keyword,
        request.skipCount,
        request.maxResultCount
      )
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: RestaurantDtoPagedResultDto) => {
        this.restaurants = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(restaurant: RestaurantDto): void {
    abp.message.confirm(
      this.l('RestaurantDeleteWarningMessage', restaurant.restaurantName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._restaurantService
            .delete(restaurant.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }

  createRestaurant(): void {
    this.showCreateOrEditRestaurantDialog();
  }

  editRestaurant(restaurant: RestaurantDto): void {
    this.showCreateOrEditRestaurantDialog(restaurant.id);
  }

  showCreateOrEditRestaurantDialog(id?: number): void {
    let createOrEditRestaurantDialog: BsModalRef;
    if (!id) {
      createOrEditRestaurantDialog = this._modalService.show(
        CreateRestaurantDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRestaurantDialog = this._modalService.show(
        EditRestaurantDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditRestaurantDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
