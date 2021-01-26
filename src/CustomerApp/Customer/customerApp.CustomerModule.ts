import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CustomerComponent } from './customerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';


@NgModule({
  declarations: [
    CustomerComponent, 
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(CustomerRoutes),
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
