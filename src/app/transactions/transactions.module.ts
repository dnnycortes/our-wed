import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRouting } from './transactions.routing';
import { TransactionsService } from './transactions.service';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRouting,
    AngularFirestoreModule,
    MaterialModule
  ],
  declarations: [TransactionsComponent],
  providers: [
    TransactionsService
  ]
})
export class TransactionsModule { }
