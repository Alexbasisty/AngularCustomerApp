import { Component } from '@angular/core';
import { Customer } from './customerApp.model';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './customerApp.customerView.html',
})

export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  
  constructor(public http:HttpClient) {
    
  }

  PostToServer() {
    // http://localhost:3000/Customers
    this.http.post("http://localhost:3000/Customers",
         this.CustomerModel)
        .subscribe(this.Success, this.Error);
  }
  Error(res:any) {
    console.debug(res.json());
  }
  Success(res:any) {
    this.CustomerModels = res.json();
  }


  SelectCustomer(_selected:any) {
    this.CustomerModel = _selected;
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
