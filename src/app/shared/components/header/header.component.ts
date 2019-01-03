import { Component, OnInit, Output, EventEmitter } from '@angular/core';


const MENU_ITEMS: Array<Object> = [
    { label: 'Home', alias: 'home' },
    { label: 'Fecha', alias: 'save-the-date' },
    { label: 'Lugar', alias: 'location' },
    { label: 'Confirmar asistencia', alias: 'rsvp' },
    { label: 'Mesa de regalos', alias: 'gift-registry' },
    { label: 'Hospedaje', alias: 'accommodation' }
];


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
    public _menuItems: Array<Object>;
    public changeClass: boolean;
    public showNav: boolean;

    @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this._menuItems = MENU_ITEMS;
    }

    ngOnInit() {
        this.changeHeaderClass();
    }

    onScroll( value ) {
        this.submitted.emit( value );
        console.log( value );
    }

    changeHeaderClass() {
        window.addEventListener('scroll', (e) => {
            if ( window.pageYOffset > 750 ) {
                this.changeClass = true;
            } else {
                this.changeClass = false;
            }
        });
    }

    showHideNav() {
        this.showNav = !this.showNav;
    }

}
