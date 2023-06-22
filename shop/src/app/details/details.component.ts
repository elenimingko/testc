
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Iproduct';
import { ActivatedRoute, Params } from '@angular/router';
import { pet } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
//activeroute
export class DetailsComponent implements OnInit {

  product : Iproduct = {} as Iproduct;
  id :number =0;
  constructor(private route:ActivatedRoute,private cartServic:CartService){

  }
addtoCart(){
  alert("ist addet")
  this.cartServic.addtoCart(this.product)
  console.log(this.cartServic.addtoCart(this.product));
  
}

  ngOnInit(): void {
    
    this.route.params.subscribe((params: Params) => {
      this.id = +params['index'];
      this.product = pet[this.id];
      console.log(this.product);
      
    });
}


}
