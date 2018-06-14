import { Component, OnInit, Input } from '@angular/core';
import { InvitedService } from '../../services/invited.service';


@Component({
    selector: 'invited-info',
    templateUrl: './invited-info.component.html',
    styleUrls: ['./invited-info.component.scss']
})


export class InvitedInfoComponent implements OnInit {

    @Input('invitedId') invitedId: string;
    private invitedInfo: object;


    constructor( private invitedService: InvitedService ) { }


    ngOnInit() {
        console.log( this.invitedId );
        this.getInvited( this.invitedId );
    }


    getInvited( id ) {
        this.invitedService.getInvited( id )
            .valueChanges()
            .subscribe( invited => {
                this.invitedInfo = invited;
                console.log(this.invitedInfo);
            });
    }

}
