import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent {
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
}
