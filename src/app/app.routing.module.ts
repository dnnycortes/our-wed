import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	},
	{
		path: 'rsvp',
		loadChildren: './rsvp/rsvp.module#RsvpModule'
	},
	{
		path: 'transactions',
		loadChildren: './transactions/transactions.module#TransactionsModule'
	}
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}

