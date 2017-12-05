import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComplaintService } from '../../../providers/complaint.service';
import { ComplaintComponent } from '../../complaint/complaint.component';
import { LoaderStop } from '../../../providers/loaderstop.service';
import { BarLoaderService } from '../../../providers/bar-loader.service';

@Component({
  selector: 'for-student',
  templateUrl: './forstudent.html',
  styleUrls:['./../../complaint/complaint.component.css','./../suggestion.component.css'],
})

export class SuggestionForStudent extends ComplaintComponent implements OnDestroy {

  constructor(public  cs: ComplaintService,
  	public  ls : LoaderStop,
    public  router: Router,
    public  route: ActivatedRoute,
    public barLoaderService:BarLoaderService) {
    super(cs,ls,router,route,barLoaderService);
  }  
  ngOnDestroy(){
  	this.ls.setLoader(true);
  }

}
