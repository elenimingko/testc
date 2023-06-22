import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart :Iproduct[]=[];
    total :number= 0;
  constructor(private cartService:CartService ){}


  ngOnInit(): void{
    this.cart=this.cartService.getCart();
    console.log(this.cart=this.cartService.getCart());
    
    this.total=this.cartService.calculateTotal();
  }
  
}

