import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  public transactionsRef: AngularFirestoreCollection<any>;
  public invited$: Observable<any>;

  constructor( private afs: AngularFirestore ) { }

  getTransactionsList( start, end) {
      this.transactionsRef = this.afs.collection( 'transactions', ref => ref.orderBy( 'quantity' ) );

      return this.transactionsRef.snapshotChanges().map(actions => {
          return actions.map( a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
          });
      });
  }

  getInvited( id ) {
      return this.afs.doc( 'transactions/' + id );
  }
}
