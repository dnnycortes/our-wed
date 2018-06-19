import { Component, OnInit, Input, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';

import { InvitedService } from '../../services/invited.service';


@Component({
    selector: 'invited-info',
    templateUrl: './invited-info.component.html',
    styleUrls: ['./invited-info.component.scss']
})


export class InvitedInfoComponent implements OnInit {

    private invitedInfo$: Observable<any>;


    constructor(
        @Inject( MAT_DIALOG_DATA ) public data: any,
        private invitedService: InvitedService
    ) { }


    ngOnInit() {
        this.getInvited( this.data.id );
    }


    getInvited( id ) {
        this.invitedInfo$ = this.invitedService.getInvited( id ).valueChanges();
    }

}
