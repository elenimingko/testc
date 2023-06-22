import { Component } from '@angular/core';
import { Iproduct } from '../Iproduct';
import { pet } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  product :Iproduct []= pet;

}
