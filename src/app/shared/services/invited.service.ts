import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';


@Injectable({
    providedIn: 'root'
})


export class InvitedService {

    constructor(
        private afs: AngularFirestore
    ) { }

    getInvitedGroup( id ) {
        return this.afs.doc( `invited/${id}` )
            .ref
            .get()
            .then( a => {
                return a.data();
            })
            .catch( error => {
                return null;
            });
    }

    updateInvitedGroup( id, data ) {
        return this.afs.doc( `invited/${id}` ).update(
            data
        );
    }
}
