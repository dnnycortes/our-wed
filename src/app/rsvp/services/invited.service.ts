import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
    providedIn: 'root'
})


export class InvitedService {
    public invitedRef: AngularFirestoreCollection<any>;
    public invited$: Observable<any>;

    constructor( private afs: AngularFirestore ) { }

    getInvitedList( start, end) {
        this.invitedRef = this.afs.collection( 'invited', ref => ref.orderBy( 'name' ).startAt( start ).endAt( end + '\uf8ff' ) );

        return this.invitedRef.snapshotChanges().map(actions => {
            return actions.map( a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        });
    }

    getInvited( id ) {
        return this.afs.doc( 'invited/' + id );
    }
}
