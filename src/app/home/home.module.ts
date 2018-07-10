import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CountdownComponent } from './components/countdown/countdown.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRouting
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CountdownComponent
    ]
})


export class HomeModule { }
