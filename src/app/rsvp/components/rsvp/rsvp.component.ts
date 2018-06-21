import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { InvitedService } from '../../services/invited.service';
import { InvitedInfoComponent } from '../invited-info/invited-info.component';
import { Observable } from 'rxjs';


@Component({
    selector: 'rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})


export class RsvpComponent implements OnInit {
    private invitedList$: Observable<any>;
    private startAt: String = '';
    private endAt: String = this.startAt + '\uf8ff';
    private lastKeyPress: any = 0;
    private showInvited: boolean;


    constructor( private invitedService: InvitedService, private dialog: MatDialog ) { }


    ngOnInit(): void {
        this.getInvitedList( this.startAt, this.endAt );
        this.showInvited = false;
    }


    getInvitedList( start, end ): void {
        this.invitedList$ = this.invitedService.getInvitedList( start, end );
    }


    openInvitedInfo( id ): void {
        const dialogRef = this.dialog.open( InvitedInfoComponent, {
            width: '500px',
            data: { id }
        });
    }


    search( $event ): void {
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
