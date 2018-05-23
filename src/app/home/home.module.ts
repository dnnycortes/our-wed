import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './components/home.component';


@NgModule({
	imports: [
		CommonModule,
		HomeRouting
	],
	declarations: [
		HomeComponent
	]
})


export class HomeModule { }
