import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestsService } from './guests.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { group } from '@angular/animations';

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

  guestGroupForm = this.formBuilder.group({
    invited: [0, [Validators.required, Validators.min(1)]],
    group: ['', [Validators.required,Validators.minLength(4)]],
    id: [null]
  });

  constructor(
    private guestsService: GuestsService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {    
  }
  

  ngOnInit(): void {
      this.getGuestsList( this._startAt, this._endAt );
  }

  getGuestsList( start, end ): void {
    this.guestsList$ = this.guestsService.getGuestsList( start, end )
  }

  deleteGuest( { id } ): void {
    this.showLoader = true;
    this.guestsService.deleteGuest(id).then(()=>{
      this.showLoader = false;
    });
  }

  setGuestGroup(guest): void {
    this.guestGroupForm.patchValue(guest);
  }

  onSubmitNewGuest() {
    if (this.guestGroupForm.valid) {
      const { invited, group: groupName, id } = this.guestGroupForm.value;
      const dateRegistered = new Date();

      this.showLoader = true;
      const guest = {
        date: dateRegistered.toUTCString(),
        group: groupName,
        invited,
        notes: '',
        ...((id) ? { id } : { guestsAttending: 0 })
      }
      const successResponse = () => {
        this.showLoader = false;
        this.guestGroupForm.reset();
        this.guestGroupForm.setValue({
          invited: 0,
          group: ''
        });
      }
      const errorResponse = (error) => {
        this.showError = error;
      }

      (!id) ? this.guestsService.createGuest(guest).then(successResponse).catch(errorResponse)
        : this.guestsService.updateGuest(guest).then(successResponse).catch(errorResponse);
    }
  }
}
