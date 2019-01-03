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

  getGuestsList({attending}) {

      const whereQuery = (attending !== undefined) ?
        ref => ref.orderBy( 'group' ).where('attending', '==', attending) :
        ref => ref.orderBy( 'group' );

      this.guestsRef = this.afs.collection( 'invited', whereQuery);
    

      return this.guestsRef.stateChanges().map(actions => {
          return actions.map( a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
          });
      });
  }
  private _generatePassword(): string {
    const chars = '2346789ABCDEFGHJKMNPQRSTUVWXTZ';
    const passwordLength = 5;
    let password = '';
    for (let i=0; i<passwordLength; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        password += chars.substring(rnum,rnum+1);
    }
    return password;
  }

  createGuest(newGuest) {
    return this.afs.collection("invited").doc(this._generatePassword()).set(newGuest);
  }

  updateGuest(guest) {
    return this.afs.collection("invited").doc(guest.id).update(guest);
  }

  deleteGuest(idGuest) {
    return this.afs.collection("invited").doc(idGuest).delete();
  }

}
