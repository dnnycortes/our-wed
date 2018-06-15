import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from '../shared/modules/material.module';

import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RsvpRouting } from './rsvp.routing';
import { InvitedService } from './services/invited.service';
import { InvitedInfoComponent } from './components/invited-info/invited-info.component';


@NgModule({
    imports: [
        CommonModule,
        RsvpRouting,
        AngularFirestoreModule,
        MaterialModule
    ],
    declarations: [
        RsvpComponent,
        InvitedInfoComponent
    ],
    providers: [
        InvitedService
    ],
    entryComponents: [
        InvitedInfoComponent
    ]
})


export class RsvpModule { }
