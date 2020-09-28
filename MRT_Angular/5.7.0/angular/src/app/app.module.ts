import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';

//allergy
import { AllergiesComponent} from './allergies/allergies.component';
import { CreateAllergyDialogComponent} from './allergies/create-allergy/create-allergy-dialog.component';
import { EditAllergyDialogComponent} from './allergies/edit-allergy/edit-allergy-dialog.component';

//adv
import { AdvPricesComponent } from './advPrices/advPrices.component';
import { EditAdvPriceDialogComponent } from './advPrices/edit-advPrice/edit-advPrice-dialog.component';
import { CreateAdvPriceDialogComponent } from './advPrices/create-advPrice/create-advPrice-dialog.component';
import { AdvDatesComponent } from './advDates/advDates.component';
import { EditAdvDateDialogComponent } from './advDates/edit-advDate/edit-advDate-dialog.component';
import { CreateAdvDateDialogComponent } from './advDates/create-advDate/create-advDate-dialog.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EditRestaurantDialogComponent } from './restaurants/edit-restaurant/edit-restaurant-dialog.component';
import { CreateRestaurantDialogComponent } from './restaurants/create-restaurant/create-restaurant-dialog.component';
import { RestaurantImagesComponent} from './restaurant-images/restaurantImages.component';
import { CreateRestaurantImageDialogComponent } from './restaurant-images/create-restaurantImage/create-restaurantImage-dialog.component';
import { EditRestaurantImageDialogComponent } from './restaurant-images/edit-restaurantImage/edit-restaurantImage-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    //allergy
    AllergiesComponent,
    CreateAllergyDialogComponent,
    EditAllergyDialogComponent,
    //adv
    AdvPricesComponent,
    EditAdvPriceDialogComponent,
    CreateAdvPriceDialogComponent,
    CreateAdvDateDialogComponent,
    EditAdvDateDialogComponent,
    AdvDatesComponent,
    //restaurant
    RestaurantsComponent,
    CreateRestaurantDialogComponent,
    EditRestaurantDialogComponent,
    RestaurantImagesComponent,
    CreateRestaurantImageDialogComponent,
    EditRestaurantImageDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,

  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
    //allergy
    CreateAllergyDialogComponent,
    EditAllergyDialogComponent,
    //adv
    EditAdvPriceDialogComponent,
    CreateAdvPriceDialogComponent,
    CreateAdvDateDialogComponent,
    EditAdvDateDialogComponent,
    //restaurant
    CreateRestaurantDialogComponent,
    EditRestaurantDialogComponent,
    CreateRestaurantImageDialogComponent,
    EditRestaurantImageDialogComponent
  ],
})
export class AppModule {}
