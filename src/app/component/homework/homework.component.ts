import {Component} from '@angular/core';
@Component({
  selector:'homework',
  templateUrl:'./homework.component.html',
  styleUrls:['./homework.component.css']
})
export class HomeworkComponent{
  app:string;
  constructor(){
     this.app='CURRENT';
  }

  activeList(app){
    this.app=app;
  }
}

