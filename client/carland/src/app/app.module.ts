import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routing";
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./services/authGuard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleSelectComponent } from './role-select/role-select.component';
import { DriverComponent } from './driver/driver.component';
import {BidService} from "./services/bid.service";
import { TopLoginComponent } from './assets/top-login/top-login.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from "./services/register.service";
import { StoComponent } from './sto/sto.component';
import { AccountDataComponent } from './sto/account-data/account-data.component';
import { AllBidsComponent } from './sto/all-bids/all-bids.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RoleSelectComponent,
    DriverComponent,
    TopLoginComponent,
    RegisterComponent,
    StoComponent,
    AccountDataComponent,
    AllBidsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes//
    )
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    BidService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
