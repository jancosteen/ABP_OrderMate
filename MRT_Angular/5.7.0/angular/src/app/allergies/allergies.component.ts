import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto,
} from '../../shared/paged-listing-component-base';
import {
  AllergyServiceProxy,
  AllergyDto,
  AllergyDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
import { CreateAllergyDialogComponent } from './create-allergy/create-allergy-dialog.component';
import { EditAllergyDialogComponent } from './edit-allergy/edit-allergy-dialog.component';

class PagedAllergysRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './allergies.component.html',
  animations: [appModuleAnimation()]
})
export class AllergiesComponent extends PagedListingComponentBase<AllergyDto> {
  allergys: AllergyDto[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _allergyService: AllergyServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedAllergysRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._allergyService
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
      .subscribe((result: AllergyDtoPagedResultDto) => {
        this.allergys = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(allergy: AllergyDto): void {
    abp.message.confirm(
      this.l('AllergyDeleteWarningMessage', allergy.allergy1),
      undefined,
      (result: boolean) => {
        if (result) {
          this._allergyService
            .delete(allergy.id)
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

  createAllergy(): void {
    this.showCreateOrEditAllergyDialog();
  }

  editAllergy(allergy: AllergyDto): void {
    this.showCreateOrEditAllergyDialog(allergy.id);
  }

  showCreateOrEditAllergyDialog(id?: number): void {
    let createOrEditAllergyDialog: BsModalRef;
    if (!id) {
      createOrEditAllergyDialog = this._modalService.show(
        CreateAllergyDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditAllergyDialog = this._modalService.show(
        EditAllergyDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditAllergyDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
}
