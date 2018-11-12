import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})


export class LocationComponent implements OnInit {
    ceremony: string;
    reception: string;

    ngOnInit() {
        this.ceremony = 'https://goo.gl/maps/g4aJJs5isrF2';
        this.reception = 'https://goo.gl/maps/dXfvajwyPR62';
    }

}
