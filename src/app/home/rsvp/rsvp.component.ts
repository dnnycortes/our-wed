import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { InvitedService } from 'src/app/shared/services/invited.service';
import { GuestInfo } from './interfaces/guest-info';
import { AlertComponent } from '../../shared/components/alert/alert.component';


@Component({
    selector: 'rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})


export class RsvpComponent {
    active = 'left';
    weddingCode: any;
    invitedGroup$: any;
    numberOfInvited: Array<number>;
    thank: boolean;
    sorry: boolean;
    alertComponent: ComponentRef<AlertComponent>;
    attendingForm = this.fb.group({
        guestsAttending: '0',
        notes: ''
    });
    @ViewChild( 'alert', { read: ViewContainerRef } ) alert: ViewContainerRef;

    constructor(
        private invitedService: InvitedService,
        private fb: FormBuilder,
        private resolver: ComponentFactoryResolver,
    ) {}

    showRsvp( data: GuestInfo ) {
        this.active = 'right';
        this.invitedGroup$ = data.guestInfo;
        this.weddingCode = data.id;
        this.getNumberOfInvited( this.invitedGroup$.invited );
    }

    getNumberOfInvited( max: number ) {
        let i = 0;
        this.numberOfInvited = Array(max).fill(0).map( () => ++i );
    }

    confirm() {
        if ( this.attendingForm.value.guestsAttending == 0 ) {
            console.log('no has seleccionado el no. de invitados ');
            this.createAlertComponent( 'Selecciona el número de invitados que asistirán' );
        } else {
            this.thank = true;
            this.active = 'third';
            this.attendingForm.value.attending = true;
            this.invitedService.updateInvitedGroup( this.weddingCode, this.attendingForm.value );
        }
    }

    cancel() {
        this.sorry = true;
        this.active = 'third';
        this.attendingForm.value.guestsAttending = 0;
        this.attendingForm.value.attending = false;
        this.invitedService.updateInvitedGroup( this.weddingCode, this.attendingForm.value );
    }

    createAlertComponent( message ) {
        const alertFactory = this.resolver.resolveComponentFactory( AlertComponent );
        this.alertComponent = this.alert.createComponent( alertFactory );
        this.alertComponent.instance.message = message;
    }

}
