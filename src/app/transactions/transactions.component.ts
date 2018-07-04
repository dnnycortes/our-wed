import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsService } from './transactions.service';
import { TransactionInterface } from './transactions.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  private transactionsList$: Observable<any>;
  private _startAt: String = '';
  private _endAt: String = this._startAt + '\uf8ff';
  transactionEntity;
  constructor( private transactionsService: TransactionsService, private dialog: MatDialog ) { }


  ngOnInit(): void {
      this.transactionEntity = { typeTransaction: 'Incomming', event:''};
      this.getTransactionsList( this._startAt, this._endAt );
  }


  getTransactionsList( start, end ): void {
      this.transactionsList$ = this.transactionsService.getTransactionsList( start, end );
  }

  onCreateClick() {
    this.addTransaction();
  }

  onDeleteClick(transactionId) {
    this.removeTransaction(transactionId);
  }

  addTransaction():void {
    this.transactionsService.createTransaction( {concept:'Second Test', quantity:10 } );
  }

  removeTransaction(transactionId):void {
    this.transactionsService.deleteTransaction( transactionId );
  }
}
