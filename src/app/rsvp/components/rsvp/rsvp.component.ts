import { Component, OnInit } from '@angular/core';
import { InvitedService } from '../../services/invited.service';


@Component({
	selector: 'app-rsvp',
	templateUrl: './rsvp.component.html',
	styleUrls: ['./rsvp.component.scss']
})


export class RsvpComponent implements OnInit {
	public invitedPeople;

	constructor( private invitedService: InvitedService ) { }

	ngOnInit() {

		this.getInvited();
	}

	getInvited() {
		this.invitedService.getInvitedList()
			.subscribe( invited => {
				this.invitedPeople = invited;
				console.log( this.invitedPeople )
			});

	}

}
