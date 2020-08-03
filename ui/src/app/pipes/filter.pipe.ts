import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: CustomerModel[], searchId: string): any {

    if (searchId != null && searchId.length > 0) {
      console.log("searchId :" + searchId);

      let customer = items.filter(x => x.customerId === 2)[0]; // items.find(x => x.customerId === Number(searchId));
      console.log("object found :" + customer.name);
      return customer;
    }
  }
}

