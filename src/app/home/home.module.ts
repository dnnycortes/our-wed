import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { SlidePanelComponent } from './components/slide-panel/slide-panel.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { InvitedService } from '../shared/services/invited.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRouting,
        AngularFirestoreModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CountdownComponent,
        RsvpComponent,
        SlidePanelComponent,
        AlertComponent
    ],
    entryComponents: [
        AlertComponent
    ],
    providers: [
        InvitedService
    ],
})


export class HomeModule { }
