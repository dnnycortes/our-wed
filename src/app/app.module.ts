import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './shared/components/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        AngularFireModule.initializeApp( environment.firebase ),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
