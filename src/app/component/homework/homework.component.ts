import {Component} from '@angular/core';
import { LoaderStop } from '../../providers/loaderstop.service';
@Component({
  selector:'homework',
  templateUrl:'./homework.component.html',
  styleUrls:['./homework.component.css']
})
export class HomeworkComponent{
  constructor(public ls : LoaderStop){
     this.ls.setLoader(false); 
  }
}

