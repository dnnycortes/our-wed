import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './components/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';


@NgModule({
	imports: [
		CommonModule,
		HomeRouting
	],
	declarations: [
		HomeComponent,
		HeaderComponent,
		FooterComponent
	]
})


export class HomeModule { }
