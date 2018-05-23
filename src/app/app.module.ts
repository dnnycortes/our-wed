import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AngularFireModule.initializeApp( environment.firebase ),
		BrowserModule,
		AppRoutingModule
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})


export class AppModule { }
