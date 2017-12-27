import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./services/authGuard.service";
import {RoleSelectComponent} from "./role-select/role-select.component";
import {DriverComponent} from "./driver/driver.component";
import {RegisterComponent} from "./register/register.component";
import {StoComponent} from "./sto/sto.component";
import {AccountDataComponent} from "./sto/account-data/account-data.component";
import {AllBidsComponent} from "./sto/all-bids/all-bids.component";
import {MapsComponent} from "./maps/maps.component";
import {AutoShopComponent} from "./auto-shop/auto-shop.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'driver', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard]},
  { path: 'role', component: RoleSelectComponent},
  { path: 'driver', component: DriverComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'sto', component: StoComponent, canActivate: [AuthGuard],
    children: [
      {
      path: '',
      component: AccountDataComponent
      },
      {
        path: 'bids',
        component: AllBidsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'maps',
        component: MapsComponent
      },
      {
        path: 'shop',
        component: AutoShopComponent
      }

    ]
  }
];
