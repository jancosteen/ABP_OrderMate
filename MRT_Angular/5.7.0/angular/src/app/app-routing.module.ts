import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { AdvPricesComponent } from './advPrices/advPrices.component';
import { AdvDatesComponent } from './advDates/advDates.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantImagesComponent } from './restaurant-images/restaurantImages.component';
import { RestaurantFacilitiesComponent } from './restaurant-facilities/restaurantFacilities.component';
import { RestaurantTypesComponent } from './restaurant-types/restaurantTypes.component';
import { MenuItemCategoriesComponent } from './menuItem-categories/menuItemCategories.component';
import { MenuItemPricesComponent } from './menuItem-prices/menuItemPrices.component';
import { OrderStatussesComponent } from './order-statusses/orderStatus.component';
import { ReservationStatussesComponent } from './reservation-statusses/reservationStatusses.component';
import { RestaurantStatussesComponent } from './restaurant-status/restaurantStatusses.component';
import { SocialMediaTypesComponent } from './socialMedia-types/socialMediaTypes.component';
import { SocialMediasComponent } from './socialMedias/socialMedias.component';
import { QrCodeGeneratorComponent } from './qrCodeGenerator/qr-code-generator/qr-code-generator.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MenuItemTypesComponent } from './menuItem-types/menuItemType.component';
import { OrdersComponent } from './orders/orders.component';
import { MenuItemsComponent } from './menuItems/menuItems.component';
import { SeatingsComponent } from './seating/seatings.component';
import { QrCodesComponent } from './qrCodes/qrCodes.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent },
                    { path: 'allergies', component: AllergiesComponent, data: { permission: 'Pages.Al' }, canActivate: [AppRouteGuard] },
                    { path: 'advPrices', component: AdvPricesComponent, data: { permission: 'Pages.AP' }, canActivate: [AppRouteGuard] },
                    { path: 'advDates', component: AdvDatesComponent, data: { permission: 'Pages.AD' }, canActivate: [AppRouteGuard] },
                    { path: 'restaurants', component: RestaurantsComponent, data: { permission: 'Pages.AD' }, canActivate: [AppRouteGuard] },
                    { path: 'resImages', component: RestaurantImagesComponent, data: { permission: 'Pages.RI' }, canActivate: [AppRouteGuard] },
                    { path: 'resFacs', component: RestaurantFacilitiesComponent, data: { permission: 'Pages.RF' }, canActivate: [AppRouteGuard] },
                    { path: 'resTypes', component: RestaurantTypesComponent, data: { permission: 'Pages.RT' }, canActivate: [AppRouteGuard] },
                    { path: 'miCat', component: MenuItemCategoriesComponent, data: { permission: 'Pages.MIC' }, canActivate: [AppRouteGuard] },
                    { path: 'miPrice', component: MenuItemPricesComponent, data: { permission: 'Pages.MIP' }, canActivate: [AppRouteGuard] },
                    { path: 'orderStatus', component: OrderStatussesComponent, data: { permission: 'Pages.OS' }, canActivate: [AppRouteGuard] },
                    { path: 'resStatus', component: ReservationStatussesComponent, data: { permission: 'Pages.RS' }, canActivate: [AppRouteGuard] },
                    { path: 'resStat', component: RestaurantStatussesComponent, data: { permission: 'Pages.RS' }, canActivate: [AppRouteGuard] },
                    { path: 'smTypes', component: SocialMediaTypesComponent, data: { permission: 'Pages.SMT' }, canActivate: [AppRouteGuard] },
                    { path: 'socialMedia', component: SocialMediasComponent, data: { permission: 'Pages.SM' }, canActivate: [AppRouteGuard] },
                    { path: 'qrGen', component: QrCodeGeneratorComponent, data: { permission: 'Pages.MIC' }, canActivate: [AppRouteGuard] },
                    { path: 'reservations', component: ReservationsComponent, data: { permission: 'Pages.R' }, canActivate: [AppRouteGuard] },
                    { path: 'miTypes', component: MenuItemTypesComponent, data: { permission: 'Pages.MIT' }, canActivate: [AppRouteGuard] },
                    { path: 'orders', component: OrdersComponent, data: { permission: 'Pages.O' }, canActivate: [AppRouteGuard] },
                    { path: 'menuItems', component: MenuItemsComponent, data: { permission: 'Pages.MI' }, canActivate: [AppRouteGuard] },
                    { path: 'seating', component: SeatingsComponent, data: { permission: 'Pages.S' }, canActivate: [AppRouteGuard] },
                    { path: 'qrCodes', component: QrCodesComponent, data: { permission: 'Pages.QC' }, canActivate: [AppRouteGuard] },

                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
