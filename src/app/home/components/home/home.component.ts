import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent {
    @ViewChild('home') home: ElementRef;
    @ViewChild('saveTheDate') saveTheDate: ElementRef;
    @ViewChild('location') location: ElementRef;
    @ViewChild('rsvp') rsvp;
    ceremony: string;
    reception: string;

    scrollTo( event ) {
        switch ( event ) {
            case 'home': 
                this.home.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'save-the-date':
                this.saveTheDate.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'location':
                this.location.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'rsvp':
                this.rsvp.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }

    ngOnInit() {
        this.ceremony = 'https://goo.gl/maps/g4aJJs5isrF2';
        this.reception = 'https://goo.gl/maps/dXfvajwyPR62';
    }
}
