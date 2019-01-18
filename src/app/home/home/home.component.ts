import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

const gallery = [
    { src: '/assets/imgs/cover-back.png' },
    { src: '/assets/imgs/cover-back2.png' },
    { src: '/assets/imgs/cover-back3.png' }
];

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    carousel: Array<any>;
    @ViewChild('home') home: ElementRef;
    @ViewChild('saveTheDate') saveTheDate: ElementRef;
    @ViewChild('location') location: ElementRef;
    @ViewChild('rsvp') rsvp: ElementRef;
    @ViewChild('giftRegistry') giftRegistry: ElementRef;
    @ViewChild('accommodation') accommodation: ElementRef;

    ngOnInit() {
        this.carousel = gallery;
    }

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
            case 'gift-registry':
                this.giftRegistry.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'accommodation':
                this.accommodation.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }
}
