import { Component, OnInit } from '@angular/core';


const MENU_ITEMS: Array<Object> = [
    { label: 'Home', link: '' },
    { label: 'Celebración', link: '' },
    { label: 'Confirma tu asistencia', link:'/rsvp' },
    { label: 'Mesa de regalos', link:'' },
    { label: 'Contacto', link:'' },
];


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
    public _menuItems: Array<Object>;

    constructor() { 
        this._menuItems = MENU_ITEMS;
    }

    ngOnInit() {
    }

}
