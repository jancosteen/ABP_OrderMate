import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  SocialMediaTypeServiceProxy,
  SocialMediaTypeDto,
  SocialMediaTypeDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateSocialMediaTypeDialogComponent } from './create-socialMediaType/create-socialMediaType-dialog.component';
import { EditSocialMediaTypeDialogComponent } from './edit-socialMediaType/edit-socialMediaType-dialog.component';

class PagedSocialMediaTypesRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './socialMediaTypes.component.html',
  animations: [appModuleAnimation()]
})
export class SocialMediaTypesComponent extends PagedListingComponentBase<SocialMediaTypeDto> {
  socialMediaTypes: SocialMediaTypeDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _socialMediaTypeService: SocialMediaTypeServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedSocialMediaTypesRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._socialMediaTypeService
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
      .subscribe((result: SocialMediaTypeDtoPagedResultDto) => {
        this.socialMediaTypes = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(socialMediaType: SocialMediaTypeDto): void {
    abp.message.confirm(
      this.l('SocialMediaTypeDeleteWarningMessage', socialMediaType.socialMediaType1),
      undefined,
      (result: boolean) => {
        if (result) {
          this._socialMediaTypeService
            .delete(socialMediaType.id)
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

  createSocialMediaType(): void {
    this.showCreateOrEditSocialMediaTypeDialog();
  }

  editSocialMediaType(socialMediaType: SocialMediaTypeDto): void {
    this.showCreateOrEditSocialMediaTypeDialog(socialMediaType.id);
  }

  showCreateOrEditSocialMediaTypeDialog(id?: number): void {
    let createOrEditSocialMediaTypeDialog: BsModalRef;
    if (!id) {
      createOrEditSocialMediaTypeDialog = this._modalService.show(
        CreateSocialMediaTypeDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditSocialMediaTypeDialog = this._modalService.show(
        EditSocialMediaTypeDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditSocialMediaTypeDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
