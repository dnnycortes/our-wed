import { Component, ViewChild, ElementRef } from '@angular/core';


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
}
