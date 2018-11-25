import { Component, ComponentRef, ComponentFactoryResolver, ViewChild, ViewContainerRef, Output, EventEmitter } from '@angular/core';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { InvitedService } from 'src/app/shared/services/invited.service';
import { GuestInfoProperties } from '../interfaces/guest-info';

@Component({
  selector: 'wedding-code',
  templateUrl: './wedding-code.component.html',
  styleUrls: ['./wedding-code.component.scss']
})


export class WeddingCodeComponent {
    weddingCode: string;
    alertComponent: ComponentRef<AlertComponent>;
    @ViewChild( 'alert', { read: ViewContainerRef } ) alert: ViewContainerRef;
    @Output() guestInfo = new EventEmitter<any>();

    constructor(
        private resolver: ComponentFactoryResolver,
        private invitedService: InvitedService
    ) { }

    createAlertComponent( message: string ) {
        const alertFactory = this.resolver.resolveComponentFactory( AlertComponent );
        this.alertComponent = this.alert.createComponent( alertFactory );
        this.alertComponent.instance.message = message;
    }


    validate() {
        if ( this.alertComponent !== undefined || this.weddingCode === '' ) {
            this.alertComponent.destroy();
        }

        if ( this.weddingCode ) {
            this.invitedService.getInvitedGroup( this.weddingCode )
            .then( result => {
                this.validateResult( result );

            });
        } else {
            this.createAlertComponent( 'Ingresa el código de la boda para confirmar.' );
        }
    }


    validateResult( data: GuestInfoProperties ) {
        if ( !data ) {
            this.createAlertComponent( 'El código de boda es incorrecto, intenta nuevamente' );
        } else {
            this.guestInfo.emit( { id: this.weddingCode, guestInfo: data } );
        }
    }

}
