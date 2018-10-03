import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    public ceremony: String;
    public reception: String;
    @ViewChild('saveTheDate') saveTheDate: ElementRef;
    @ViewChild('location') location: ElementRef;

    scrollTo( event ) {
        switch ( event ) {
            case 'save-the-date':
                this.saveTheDate.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'location':
                this.location.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }

    ngOnInit() {
        this.ceremony = 'https://goo.gl/maps/g4aJJs5isrF2';
        this.reception = 'https://goo.gl/maps/dXfvajwyPR62';
    }
}
