import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MaterialModule } from '../../shared/modules/material.module';

import { GuestsComponent } from './guests.component';
import { GuestsRouting } from './guests.routing';
import { GuestsService } from './guests.service';

@NgModule({
  imports: [
    CommonModule,
    GuestsRouting,
    AngularFirestoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GuestsComponent,
  ],
  providers: [
    GuestsService
  ]
})
export class GuestsModule { }
