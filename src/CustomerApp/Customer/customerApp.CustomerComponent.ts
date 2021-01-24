import { Component } from '@angular/core';
import { Customer } from './customerApp.model';

@Component({
  templateUrl: './customerApp.customerView.html',
})

export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
