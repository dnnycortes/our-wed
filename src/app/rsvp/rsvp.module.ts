import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RsvpRouting } from './rsvp.routing';


@NgModule({
	imports: [
		CommonModule,
		RsvpRouting
	],
	declarations: [
		RsvpComponent
	]
})


export class RsvpModule { }
