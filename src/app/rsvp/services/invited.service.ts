import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
	providedIn: 'root'
})


export class InvitedService {
	public invitedRef: AngularFirestoreCollection<any>;
	public invited$: Observable<any>;

	constructor( private afs: AngularFirestore ) { }

	getInvitedList() {
		this.invitedRef = this.afs.collection('invited');
		this.invited$ = this.invitedRef.valueChanges();
		return this.invited$;
	}
}
