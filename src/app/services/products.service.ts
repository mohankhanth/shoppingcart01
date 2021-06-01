import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { 
    
    if(localStorage.getItem('localitems') != null) {
      let localLength = JSON.parse(localStorage.getItem('localitems')).length;
      this.cartNumber.next(localLength);
    }
  }

  cartNumber:BehaviorSubject<number> =  new BehaviorSubject(0);

  getProduct():Product[] {
    return [
      {
        id: '1',
        image:
          'https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/new-arrivals/arrivals01.jpg',
        title: 'Phosphorus',
        price: 650,
        qnt:1
      },
      {
        id: '2',
        image:
          'https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/new-arrivals/arrivals02.jpg',
        title: 'Phosphorus',
        price: 650,
        qnt:1
      },
      {
        id: '3',
        image:
          'https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/new-arrivals/arrivals03.jpg',
        title: 'Phosphorus',
        price: 650,
        qnt:1
      },
      {
        id: '4',
        image:
          'https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/new-arrivals/arrivals04.jpg',
        title: 'Phosphorus',
        price: 650,
        qnt:1
      },
      {
        id: '5',
        image:
          'https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/new-arrivals/arrivals01.jpg',
        title: 'Phosphorus',
        price: 650,
        qnt:1
      }
    ]
  }
}
