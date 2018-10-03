import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { AngularFirestoreDocument } from 'angularfire2/firestore';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { InvitedService } from 'src/app/shared/services/invited.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})


export class RsvpComponent {
    isVisible = true;
    weddingCode: any;
    alertComponent: ComponentRef<AlertComponent>;
    invitedGroup$: any;
    numberOfInvited: Array<number>;
    @ViewChild( 'entry', { read: ViewContainerRef } ) entry: ViewContainerRef;

    constructor(
        private resolver: ComponentFactoryResolver,
        private invitedService: InvitedService
    ) {}

    showComponent() {
        this.isVisible = !this.isVisible;
    }

    validate() {
        if ( this.alertComponent !== undefined || this.weddingCode === '' ) {
            this.alertComponent.destroy();
        }

        if ( this.weddingCode ) {
            this.invitedService.getInvitedGroup( this.weddingCode )
            .subscribe( result => {
                this.invitedGroup$ = result;
                this.validateResult( result );

            });
        } else {
            this.createAlertComponent( 'Ingresa el código de la boda para confirmar.', 'warning' );
        }
    }

    createAlertComponent( message, type ) {
        const alertFactory = this.resolver.resolveComponentFactory( AlertComponent );
        this.alertComponent = this.entry.createComponent( alertFactory );
        this.alertComponent.instance.message = message;
        this.alertComponent.instance.type = type;
    }

    validateResult( data ) {
        if ( !data ) {
            this.createAlertComponent( 'El código de boda es incorrecto, intenta nuevamente', 'warning' );
        } else {
            this.isVisible = !this.isVisible;
            this.getNumberOfInvited( data.invited );
        }
    }

    getNumberOfInvited( max ) {
        let i = 0;
        this.numberOfInvited = Array(max).fill(0).map( () => ++i );
    }

}
