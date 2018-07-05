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
  private transactionEntity;
  public showLoader: boolean = false;
  constructor( private transactionsService: TransactionsService, private dialog: MatDialog ) {

  }

  ngOnInit(): void {
      this._initializeTransaction();
      this.getTransactionsList( this._startAt, this._endAt );
  }

  getTransactionsList( start, end ): void {
      this.transactionsList$ = this.transactionsService.getTransactionsList( start, end );
  }

  onSaveClick() {
    this._saveTransaction(this.transactionEntity);
  }

  onDeleteClick(transactionId) {
    this._removeTransaction(transactionId);
  }

  onEditClick(transaction) {
    this.transactionEntity = transaction;
  }

  private _initializeTransaction() {
    this.transactionEntity = { typeTransaction: 'Incomming', event:'', concept: '', quantity: 0};
  }

  private _saveTransaction(transaction):void {
    this.showLoader = true;
    this.transactionsService.saveTransaction(transaction).then(() => {
      console.log("Document successfully deleted From Component!");
      this.showLoader = false;
      this._initializeTransaction();
  }).catch(function(error) {
      this.showLoader = false;
      console.error("Error removing document From component: ", error);
  });
  }

  private _removeTransaction(transactionId):void {
    this.transactionsService.deleteTransaction( transactionId );
  }
}
