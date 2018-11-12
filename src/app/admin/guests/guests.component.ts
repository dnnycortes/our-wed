import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestsService } from './guests.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  guestsList$: Observable<any>;
  private _startAt: String = '';
  private _endAt: String = this._startAt + '\uf8ff';
  guestEntity;
  public showLoader: boolean = false;
  public showError: string = '';
  constructor( private guestsService: GuestsService, private dialog: MatDialog ) { }


  ngOnInit(): void {
      this.getGuestsList( this._startAt, this._endAt );
  }


  getGuestsList( start, end ): void {
      this.guestsList$ = this.guestsService.getGuestsList( start, end );
  }

  deleteGuest( start, end ): void {
    this.guestsService.deleteGuest(newGuest).then((data)=>{
      console.log('deleted');
    });
  }

  onSubmitNewGuest(f: NgForm) {
    if(f.valid){
      const dateRegistered = new Date();
      const newGuest = {
        date: dateRegistered.toUTCString(),
        group: f.value.group,
        invited: f.value.invited,
        guestsAttending: 0,
        notes:''
      };
      this.showLoader = true;
      this.guestsService.newGuest(newGuest).then((data)=>{
        this.showLoader = false;
      }).catch((error)=>{
          this.showError = error;
        }
      );
    }
}

}
