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
import { RestaurantFacilitiesComponent } from './restaurant-facilities/restaurantFacilities.component';
import { EditRestaurantFacilityDialogComponent } from './restaurant-facilities/edit-facility/edit-restaurantFacility-dialog.component';
import { CreateRestaurantFacilityDialogComponent } from './restaurant-facilities/create-facility/create-restaurantFacility-dialog.component';
import { RestaurantTypesComponent } from './restaurant-types/restaurantTypes.component';
import { EditRestaurantTypeDialogComponent } from './restaurant-types/edit-restaurantType/edit-restaurantType-dialog.component';
import { CreateRestaurantTypeDialogComponent } from './restaurant-types/create-restaurantType/create-restaurantType-dialog.component';
import { MenuItemCategoriesComponent } from './menuItem-categories/menuItemCategories.component';
import { CreateMenuItemCategoryDialogComponent} from './menuItem-categories/create-menuItemCategory/create-menuItemCategory-dialog.component';
import { EditMenuItemCategoryDialogComponent } from './menuItem-categories/edit-menuItemCategory/edit-menuItemCategory-dialog.component';
import { MenuItemPricesComponent } from './menuItem-prices/menuItemPrices.component';
import { CreateMenuItemPriceDialogComponent} from './menuItem-prices/create-menuItemPrice/create-menuItemPrice-dialog.component';
import { EditMenuItemPriceDialogComponent } from './menuItem-prices/edit-menuItemPrice/edit-menuItemPrice-dialog.component';
import {EditOrderStatusDialogComponent} from './order-statusses/edit-orderStatus/edit-orderStatus-dialog.component';
import {CreateOrderStatusDialogComponent} from './order-statusses/create-orderStatus/create-orderStatus-dialog.component';
import { OrderStatussesComponent} from './order-statusses/orderStatus.component';
import { EditReservationStatusDialogComponent } from './reservation-statusses/edit-reservationStatus/edit-reservationStatus-dialog.component';
import { CreateReservationStatusDialogComponent } from './reservation-statusses/create-reservationStatus/create-reservationStatus-dialog.component';
import { ReservationStatussesComponent } from './reservation-statusses/reservationStatusses.component';
import { RestaurantStatussesComponent } from './restaurant-status/restaurantStatusses.component';
import { CreateRestaurantStatusDialogComponent } from './restaurant-status/create-restaurantStatus/create-restaurantStatus-dialog.component';
import { EditRestaurantStatusDialogComponent } from './restaurant-status/edit-restaurantStatus/edit-restaurantStatus-dialog.component';
import { SocialMediaTypesComponent } from './socialMedia-types/socialMediaTypes.component';
import { CreateSocialMediaTypeDialogComponent } from './socialMedia-types/create-socialMediaType/create-socialMediaType-dialog.component';
import { EditSocialMediaTypeDialogComponent } from './socialMedia-types/edit-socialMediaType/edit-socialMediaType-dialog.component';
import { SocialMediasComponent } from './socialMedias/socialMedias.component';
import { CreateSocialMediaDialogComponent } from './socialMedias/create-socialMedia/create-socialMedia-dialog.component';
import { EditSocialMediaDialogComponent } from './socialMedias/edit-socialMedia/edit-socialMedia-dialog.component';
import { QrCodeGeneratorComponent } from './qrCodeGenerator/qr-code-generator/qr-code-generator.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ReservationsComponent } from './reservations/reservations.component';
import { EditReservationDialogComponent } from './reservations/edit-reservation/edit-reservation-dialog.component';
import { CreateReservationDialogComponent } from './reservations/create-reservation/create-reservation-dialog.component';
import { MenuItemTypesComponent } from './menuItem-types/menuItemType.component';
import { EditMenuItemTypeDialogComponent } from './menuItem-types/edit-menuItemType/edit-menuItemType-dialog.component';
import { CreateMenuItemTypeDialogComponent } from './menuItem-types/create-menuItemType/create-menuItemType-dialog.component';


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
    //menuItems
    CreateMenuItemCategoryDialogComponent,
    MenuItemCategoriesComponent,
    EditMenuItemCategoryDialogComponent,
    CreateMenuItemPriceDialogComponent,
    MenuItemPricesComponent,
    EditMenuItemPriceDialogComponent,
    MenuItemTypesComponent,
    EditMenuItemTypeDialogComponent,
    CreateMenuItemTypeDialogComponent,
    //restaurant
    RestaurantsComponent,
    CreateRestaurantDialogComponent,
    EditRestaurantDialogComponent,
    RestaurantImagesComponent,
    CreateRestaurantImageDialogComponent,
    EditRestaurantImageDialogComponent,
    RestaurantFacilitiesComponent,
    EditRestaurantFacilityDialogComponent,
    CreateRestaurantFacilityDialogComponent,
    RestaurantTypesComponent,
    EditRestaurantTypeDialogComponent,
    CreateRestaurantTypeDialogComponent,
    EditRestaurantStatusDialogComponent,
    CreateRestaurantStatusDialogComponent,
    RestaurantStatussesComponent,
    EditSocialMediaTypeDialogComponent,
    CreateSocialMediaTypeDialogComponent,
    SocialMediaTypesComponent,
    SocialMediasComponent,
    CreateSocialMediaDialogComponent,
    EditSocialMediaDialogComponent,
    //orders
    EditOrderStatusDialogComponent,
    CreateOrderStatusDialogComponent,
    OrderStatussesComponent,
    //reservations
    EditReservationStatusDialogComponent,
    CreateReservationStatusDialogComponent,
    ReservationStatussesComponent,
    QrCodeGeneratorComponent,
    EditReservationDialogComponent,
    CreateReservationDialogComponent,
    ReservationsComponent,
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
    NgxQRCodeModule

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
    //menuItems
    CreateMenuItemCategoryDialogComponent,
    EditMenuItemCategoryDialogComponent,
    EditMenuItemPriceDialogComponent,
    CreateMenuItemPriceDialogComponent,
    EditMenuItemTypeDialogComponent,
    CreateMenuItemTypeDialogComponent,
    //restaurant
    CreateRestaurantDialogComponent,
    EditRestaurantDialogComponent,
    CreateRestaurantImageDialogComponent,
    EditRestaurantImageDialogComponent,
    EditRestaurantFacilityDialogComponent,
    CreateRestaurantFacilityDialogComponent,
    EditRestaurantTypeDialogComponent,
    CreateRestaurantTypeDialogComponent,
    EditRestaurantStatusDialogComponent,
    CreateRestaurantStatusDialogComponent,
    EditSocialMediaTypeDialogComponent,
    CreateSocialMediaTypeDialogComponent,
    CreateSocialMediaDialogComponent,
    EditSocialMediaDialogComponent,
    //order
    EditOrderStatusDialogComponent,
    CreateOrderStatusDialogComponent,
    //reservations
    EditReservationStatusDialogComponent,
    CreateReservationStatusDialogComponent,
    EditReservationDialogComponent,
    CreateReservationDialogComponent,

  ],
})
export class AppModule {}
