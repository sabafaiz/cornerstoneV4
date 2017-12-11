import {Component} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
selector:'poll',
templateUrl:'./poll.component.html',
styleUrls:['./poll.component.css'],
})

export class PollComponent {
    app:string;
    constructor(public router:Router){
        this.app="current"
         
        //  this.router.navigate(["/poll/current-poll"]);
    }

    activeList(app){
        this.app=app;
    }

}


