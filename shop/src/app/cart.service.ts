import { Injectable } from '@angular/core';
import { Iproduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart :Iproduct[] =[];

  constructor() { }
  addtoCart(obj:Iproduct){
    this.cart.push(obj);
  
    
  }
  getCart(){
    
    return this.cart;

  }
  clearCart(){
    this.cart=[];
    return this.cart;
  }
  calculateTotal(){
    let total :number =0;
    for (let val of this.cart) {
    total=total + val.price;
      
    }
    return total;
  }
}
