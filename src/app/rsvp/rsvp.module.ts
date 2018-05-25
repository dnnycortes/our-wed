import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RsvpRouting } from './rsvp.routing';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { InvitedService } from './services/invited.service';


@NgModule({
	imports: [
		CommonModule,
		RsvpRouting,
		AngularFirestoreModule
	],
	declarations: [
		RsvpComponent
	],
	providers: [
		InvitedService
	]
})


export class RsvpModule { }
