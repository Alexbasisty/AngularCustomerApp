import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './customerApp.HomeComponent';
import { MasterPageComponent } from './customerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
