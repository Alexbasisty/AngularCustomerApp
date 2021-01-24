import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from './Customer/customerApp.CustomerComponent';
import { HomeComponent } from './Home/customerApp.HomeComponent';
import { MasterPageComponent } from './Home/customerApp.MasterPageComponent';
import { SupplierComponent } from './Supplier/customerApp.SupplierComponent';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';


@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    MasterPageComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
