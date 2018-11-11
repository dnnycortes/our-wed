import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})


export class AlertComponent implements OnInit {

    message: string;
    type: string;


    ngOnInit() {
        console.log( this.message );
        console.log( this.type );
    }

}
