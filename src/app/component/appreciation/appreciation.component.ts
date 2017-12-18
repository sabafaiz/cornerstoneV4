import {Component} from '@angular/core';
import {Router } from '@angular/router';


@Component({
  selector: 'appreciation',
  templateUrl:'./appreciation.component.html',
  styleUrls:['./appreciation.component.css']
})
export class AppreciationComponent{ 
     constructor(public router:Router){
    }
     
}