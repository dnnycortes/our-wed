import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { InvitedService } from '../../services/invited.service';
import { InvitedInfoComponent } from '../invited-info/invited-info.component';


@Component({
    selector: 'rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})


export class RsvpComponent implements OnInit {
    public invitedList: Array<Object>;
    public startAt = '';
    public endAt = this.startAt + '\uf8ff';
    public lastKeyPress: any = 0;
    public showInvited: boolean;
    public invitedId: string;
    public loadInvitedInfo: boolean;


    constructor( private invitedService: InvitedService, private dialog: MatDialog ) { }


    ngOnInit() {
        this.getInvitedList( this.startAt, this.endAt );
        this.showInvited = false;
        this.loadInvitedInfo = false;
    }


    getInvitedList( start, end ) {
        this.invitedService.getInvitedList( start, end )
            .subscribe( invited => {
                this.invitedList = invited;
                console.log(this.invitedList);
            });

    }


    selectInvited( id ) {
        this.invitedId = id;
        this.loadInvitedInfo = true;
    }


    openInvitedInfo( id ): void {
        const dialogRef = this.dialog.open( InvitedInfoComponent, {
            width: '400px',
            data: { id }
        });
    }


    search( $event ): void {
        this.loadInvitedInfo = false;

        if ( $event.target.value === '') {
            this.showInvited = false;
        } else if ( $event.timeStamp - this.lastKeyPress > 500 ) {
            const q = $event.target.value;
            this.startAt = q;
            this.endAt = this.startAt + '\uf8ff';
            this.getInvitedList( this.startAt, this.endAt);
            this.showInvited = true;
        }
        this.lastKeyPress = $event.timeStamp;
    }
}
