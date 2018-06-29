import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsService } from './transactions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  private transactionsList$: Observable<any>;
  private _startAt: String = '';
  private _endAt: String = this._startAt + '\uf8ff';

  constructor( private transactionsService: TransactionsService, private dialog: MatDialog ) { }


  ngOnInit(): void {
      this.getTransactionsList( this._startAt, this._endAt );
  }


  getTransactionsList( start, end ): void {
      this.transactionsList$ = this.transactionsService.getTransactionsList( start, end );
  }

}
