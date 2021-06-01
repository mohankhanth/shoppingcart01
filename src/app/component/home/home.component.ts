import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[];
  localLength:number = 0

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
   this.products = this.productService.getProduct();
    console.log(this.productService.getProduct());
  }


  inc(p:Product) {
    p.qnt += 1;
  }

  dec(p:Product) {
    if(p.qnt !==1) { p.qnt -= 1;}
  }

   itemsCart:Product[] = [];
  
  addtocart(category:Product) {
      let localnone = localStorage.getItem('localitems');

      if(localnone == null) {
        let itemarray:Product[] = [];
        itemarray.push(category)
        localStorage.setItem('localitems', JSON.stringify(itemarray));
      } else {
        var id = category.id;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localitems'));

      for (let i=0; i<this.itemsCart.length; i++){
        if(id === this.itemsCart[i].id){
            this.itemsCart[i].qnt = category.qnt;
            index = i;
            break;
          }
        }

        if(index == -1){
          this.itemsCart.push(category);
          localStorage.setItem('localitems', JSON.stringify(this.itemsCart));
        }
        else{
          localStorage.setItem('localitems', JSON.stringify(this.itemsCart));
        }
      }

      this.localLength = JSON.parse(localStorage.getItem('localitems')).length;
      console.log(this.localLength);
      this.productService.cartNumber.next(this.localLength);
    
  }

}
