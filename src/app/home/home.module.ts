import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UICarouselModule } from 'ui-carousel';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CountdownComponent } from './save-the-date/countdown/countdown.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { SlidePanelComponent } from '../shared/components/slide-panel/slide-panel.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { InvitedService } from '../shared/services/invited.service';
import { WeddingCodeComponent } from './rsvp/wedding-code/wedding-code.component';
import { SaveTheDateComponent } from './save-the-date/save-the-date.component';
import { LocationComponent } from './location/location.component';
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { HotelItemComponent } from './accommodation/hotel-item/hotel-item.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRouting,
        AngularFirestoreModule,
        UICarouselModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CountdownComponent,
        RsvpComponent,
        SlidePanelComponent,
        AlertComponent,
        WeddingCodeComponent,
        SaveTheDateComponent,
        LocationComponent,
        GiftRegistryComponent,
        HotelItemComponent,
        AccommodationComponent
    ],
    entryComponents: [
        AlertComponent
    ],
    providers: [
        InvitedService
    ],
})


export class HomeModule { }
