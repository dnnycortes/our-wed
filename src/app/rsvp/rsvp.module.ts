import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from '../shared/modules/material.module';

import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RsvpRouting } from './rsvp.routing';
import { InvitedService } from './services/invited.service';


@NgModule({
    imports: [
        CommonModule,
        RsvpRouting,
        AngularFirestoreModule,
        MaterialModule
    ],
    declarations: [
        RsvpComponent
    ],
    providers: [
        InvitedService
    ]
})


export class RsvpModule { }
