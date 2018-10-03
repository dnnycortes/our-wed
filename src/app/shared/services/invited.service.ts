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
        return this.afs.doc( `invited/${id}` ).snapshotChanges()
                .map( a => {
                    if ( a.payload.exists ) {
                        const data = a.payload.data();
                        return data;
                    } else {
                        return null;
                    }
                });
    }
}
