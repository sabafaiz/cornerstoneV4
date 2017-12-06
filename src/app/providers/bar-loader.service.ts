import { Injectable } from '@angular/core';

@Injectable()
export class BarLoaderService {
barObj:any;
	showBarLoader (barLoaderObj:any){
        this.barObj = barLoaderObj;
		this.barObj.showLoader = true;
	}
    hideBarLoader (){
		this.barObj && (this.barObj.showLoader = false);
	}

}