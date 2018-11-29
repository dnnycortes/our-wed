import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  public guestsRef: AngularFirestoreCollection<any>;
  public invited$: Observable<any>;

  constructor(
    private afs: AngularFirestore,
    ) { }

  getGuestsList( start, end) {
      this.guestsRef = this.afs.collection( 'invited', ref => ref.orderBy( 'group' ) );

      return this.guestsRef.snapshotChanges().map(actions => {
          return actions.map( a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
          });
      });
  }

  createGuest(newGuest) {
    return this.afs.collection("invited").add(newGuest);
  }

  updateGuest(guest) {
    return this.afs.collection("invited").doc(guest.id).update(guest);
  }

  deleteGuest(idGuest) {
    return this.afs.collection("invited").doc(idGuest).delete();
  }

}
