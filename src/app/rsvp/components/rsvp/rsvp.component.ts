import { Component, OnInit } from '@angular/core';
import { InvitedService } from '../../services/invited.service';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})


export class RsvpComponent implements OnInit {
    public invitedPeople;
    public startAt = '';
    public endAt = this.startAt + '\uf8ff';
    public lastKeyPress: any = 0;
    public showInvited: boolean;


    constructor( private invitedService: InvitedService ) { }


    ngOnInit() {
        this.getInvited( this.startAt, this.endAt );
        this.showInvited = false;
    }


    getInvited( start, end ) {
        this.invitedService.getInvitedList( start, end )
            .subscribe( invited => {
                this.invitedPeople = invited;
            });

    }


    search( $event ): void {
        if ( $event.target.value === '') {
            this.showInvited = false;
        } else if ( $event.timeStamp - this.lastKeyPress > 500 ) {
            const q = $event.target.value;
            this.startAt = q;
            this.endAt = this.startAt + '\uf8ff';
            this.getInvited( this.startAt, this.endAt);
            this.showInvited = true;
        }
        this.lastKeyPress = $event.timeStamp;
    }

}
