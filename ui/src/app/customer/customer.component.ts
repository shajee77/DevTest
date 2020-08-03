import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypeService } from '../services/type.service';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public types: string[] = [];
  public customers: CustomerModel[] = [];

  public newCustomer: CustomerModel = {
    customerId: null,
    name: null,
    type: null
  };

  constructor(private typeService: TypeService,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.typeService.GetTypes().subscribe(types => this.types = types);
    this.getCustomers();
  }

  public createCustomer(form: NgForm): void {    
    if (form.invalid) {
      return;
    } else {
      this.customerService.CreateCustomer(this.newCustomer).then(() => {
        this.getCustomers();
      });
    }
  }

  public getCustomers() {
    this.customerService.GetCustomers().subscribe(customer => this.customers = customer);
  }
}
