import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestsService } from './guests.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { group } from '@angular/animations';


@Component({
  selector: 'guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})


export class GuestsComponent implements OnInit {
  guestsList$: Observable<any>;
  public showLoader: boolean = false;
  public showError: string = '';
  public guests = {
    total: 0,
    confirmed: 0,
    cancelled: 0,
    pending: 0
  };

  guestStates = [
    {label: 'Todos'},
    {label: 'Confirmados'},
    {label: 'No confirmados'}
  ];

  guestGroupForm = this.formBuilder.group({
    invited: ['', [Validators.required, Validators.min(1)]],
    group: ['', [Validators.required,Validators.minLength(4)]],
    comment: [''],
    id: [null],
    registra: []
  });

  filtersGuest = new FormGroup({
    guestState: new FormControl(this.guestStates[0]),
  });

  constructor(
    private guestsService: GuestsService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {    
  }
  

  ngOnInit(): void {
    const {guestState} = this.filtersGuest.value
    let attending;
    switch(guestState.label){
      case 'Confirmados':
        attending = true
      break;
      case 'No confirmados':
        attending = false;
      break;        
    }

    this.guestsList$ = this.guestsService.getGuestsList({attending});
    this.guestsList$.subscribe((list) => {
      this.guests.total = list.reduce((valorAnterior,{invited,registra})=>{
        return {...valorAnterior, [registra]:valorAnterior[registra]+invited}},{Dany:0, Jaime:0});

      const attendingDetail = list.reduce(
      (valorAnterior,{guestsAttending, attending, invited}) => {
        const confirmedSum = attending ? parseInt(guestsAttending) : 0;
        const cancelledSum = attending ? parseInt(invited) - parseInt(guestsAttending) : 0;
 
        return {
          confirmed: valorAnterior.confirmed + confirmedSum,
          cancelled: valorAnterior.cancelled + cancelledSum
        }
      }, {confirmed:0, cancelled:0});
      this.guests.confirmed =  attendingDetail.confirmed;

      this.guests.cancelled = attendingDetail.cancelled + list.reduce(
        (valorAnterior, {group, invited, attending}) => {
          const sum = attending === false ? parseInt(invited) : 0;
          return valorAnterior + sum
        }
        ,0);

      this.guests.pending = (this.guests.total['Dany'] + this.guests.total['Jaime']) - this.guests.confirmed - this.guests.cancelled;
    });
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
      const { invited, group: groupName, id, registra, comment } = this.guestGroupForm.value;
      const dateRegistered = new Date();

      this.showLoader = true;
      const guest = {
        date: dateRegistered.toUTCString(),
        group: groupName,
        invited,
        comment,
        registra,
        ...((id) ? { id } : { guestsAttending: 0, attending: null })
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
