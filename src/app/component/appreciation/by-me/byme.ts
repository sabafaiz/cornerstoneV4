import {Component , OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComplaintService } from '../../../providers/complaint.service';
import { ComplaintComponent } from '../../complaint/complaint.component';
// import {AppreciationService} from './../../../providers/appreciation.service';
import { LoaderStop } from '../../../providers/loaderstop.service';
import { BarLoaderService } from '../../../providers/bar-loader.service';

@Component({
  selector:'for-student',
  templateUrl:'./byme.html',
  styleUrls:['./../appreciation.component.css']
})

export class ByMeComponent extends ComplaintComponent implements OnDestroy, OnInit{
  

  constructor(public  cs: ComplaintService,
    public  router: Router,
    public  ls : LoaderStop,
    public  route: ActivatedRoute,
    public barLoaderService:BarLoaderService) {
    super(cs,ls,router,route,barLoaderService);
    this.ls.setLoader(false);    
    if(this.url == "/appreciation/for-student") {
      this.url = "/appreciation/for-student";
    }
  }  

  ngOnInit(){
  	   this.ls.setLoader(false);
  }

  ngOnDestroy(){
     this.ls.setLoader(true); 
    }
}