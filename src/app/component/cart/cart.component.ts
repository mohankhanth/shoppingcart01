import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartLists:Product[] = [];
  localLength01:number = 0;
  totalamd:number;

  constructor( private service:ProductsService,
               private router:Router) { }

  ngOnInit(): void {
    this.getCartlist();
    this.totalAmound();
  }

  backtohome(){
    this.router.navigate(['/']);
  }

  getCartlist() {
    if(localStorage.getItem('localitems')){
      this.cartLists = JSON.parse(localStorage.getItem('localitems'));
      console.log(this.cartLists)
    }
  }

  inc(id:string, qnty:number){
    console.log('click')
    this.cartLists.forEach(carts => {
      if(carts.id === id){
        carts.qnt = qnty + 1;
      }
    })
    localStorage.setItem('localitems', JSON.stringify(this.cartLists))
    this.totalAmound();
  }

  dec(id:string, qnty:number){
    this.cartLists.forEach(carts => {
      if(carts.id === id){
        if(qnty != 1){
          carts.qnt = qnty - 1;
        }
      }
    })
    localStorage.setItem('localitems', JSON.stringify(this.cartLists));
    this.totalAmound();
  }

  delete(id:string){
    this.cartLists.forEach((carts, index) => {
      if(carts.id === id){
        this.cartLists.splice(index,1);
      }
    })
    localStorage.setItem('localitems', JSON.stringify(this.cartLists));

    this.localLength01 = JSON.parse(localStorage.getItem('localitems')).length;

    this.service.cartNumber.next(this.localLength01);
    this.totalAmound();
  }

  clearAll(){
    localStorage.removeItem('localitems');
    this.cartLists = [];
    this.service.cartNumber.next(this.localLength01);
    this.totalAmound();
  }

  totalAmound(){
   this.totalamd = this.cartLists.reduce((total, carts) => {
        return total + (carts.price * carts.qnt)
    },0);
     console.log(this.totalamd);
  }


}
