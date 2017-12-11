import {Component} from '@angular/core';
import {Router } from '@angular/router';


@Component({
  selector: 'appreciation',
  templateUrl:'./appreciation.component.html',
  styleUrls:['./appreciation.component.css']
})
export class AppreciationComponent{
  app:string;
 
     constructor(public router:Router){
      this.app='for';
      // this.router.navigate(["/appreciation/for-me"]);
    }

    activeList(app){
      this.app=app;
    }
     
}