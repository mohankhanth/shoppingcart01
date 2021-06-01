import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalCart:number;
  constructor( private service: ProductsService) { 
    
  }

  ngOnInit(): void {
    this.service.cartNumber.subscribe(data => this.totalCart = data);
  }

}
