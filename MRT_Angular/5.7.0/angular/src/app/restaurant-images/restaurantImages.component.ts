import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  RestaurantImageServiceProxy,
  RestaurantImageDto,
  RestaurantImageDtoPagedResultDto, RestaurantServiceProxy, RestaurantDtoPagedResultDto, RestaurantDto
} from '../../shared/service-proxies/service-proxies';
import { CreateRestaurantImageDialogComponent } from './create-restaurantImage/create-restaurantImage-dialog.component';
import { EditRestaurantImageDialogComponent } from './edit-restaurantImage/edit-restaurantImage-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';



class PagedRestaurantImagesRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './restaurantImages.component.html',
  animations: [appModuleAnimation()]
})
export class RestaurantImagesComponent extends PagedListingComponentBase<RestaurantImageDto> {
  restaurantImages: RestaurantImageDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;
  restaurants: RestaurantDto[] = [];
  images:any =[];


  constructor(
    injector: Injector,
    private _restaurantImageService: RestaurantImageServiceProxy,
    private _modalService: BsModalService,
    private sanitizer: DomSanitizer
  ) {
    super(injector);
  }

  list(
    request: PagedRestaurantImagesRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._restaurantImageService
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
      .subscribe((result: RestaurantImageDtoPagedResultDto) => {
        this.restaurantImages = result.items;
        this.convertImage(this.restaurantImages);
        this.showPaging(result, pageNumber);
      });

  }

  convertImage(resImages:RestaurantImageDto[]){
    for(let i=0;i<resImages.length;i++){
      this.images[i]=this.sanitizer.bypassSecurityTrustResourceUrl(`binding:data:image/png;base64,${resImages[i].imageFile}`)
      this.restaurantImages[i].imageFile = this.images;
    }
  }

  delete(restaurantImage: RestaurantImageDto): void {
    abp.message.confirm(
      this.l('RestaurantImageDeleteWarningMessage', restaurantImage.imageDescription),
      undefined,
      (result: boolean) => {
        if (result) {
          this._restaurantImageService
            .delete(restaurantImage.id)
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

  createRestaurantImage(): void {
    this.showCreateOrEditRestaurantImageDialog();
  }

  editRestaurantImage(restaurantImage: RestaurantImageDto): void {
    this.showCreateOrEditRestaurantImageDialog(restaurantImage.id);
  }

  showCreateOrEditRestaurantImageDialog(id?: number): void {
    let createOrEditRestaurantImageDialog: BsModalRef;
    if (!id) {
      createOrEditRestaurantImageDialog = this._modalService.show(
        CreateRestaurantImageDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRestaurantImageDialog = this._modalService.show(
        EditRestaurantImageDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditRestaurantImageDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
