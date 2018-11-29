import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'admin/transactions',
        loadChildren: './admin/transactions/transactions.module#TransactionsModule'
    },
    {
        path: 'admin/guests',
        loadChildren: './admin/guests/guests.module#GuestsModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule {}

