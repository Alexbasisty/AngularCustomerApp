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
    var customerDTO:any = {};
    customerDTO.CustomerCode = this.CustomerModel.CustomerCode;
    customerDTO.CustomerName = this.CustomerModel.CustomerName;
    customerDTO.CustomerAmount = this.CustomerModel.CustomerAmount;

    this.http.post("http://localhost:3000/Customers",
         customerDTO)
        .subscribe(res=>this.Success(res), res=>this.Error(res));
  }
  GetFromServer() {
    // http://localhost:3000/Customers

    this.http.get("http://localhost:3000/Customers")
        .subscribe(res=>this.SuccessGet(res), res=>this.Error(res));
  }
  Error(res:any) {
    console.debug(res.json());
  }
  Success(res:any) {
    this.GetFromServer();
  }
  SuccessGet(res:any) {
    this.CustomerModels = res;
  }

  SelectCustomer(_selected:any) {
    this.CustomerModel = _selected;
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
