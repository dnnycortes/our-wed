import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {
    public legalCopy: String;

    constructor() { }

    ngOnInit() {
        this.legalCopy = 'Hecho con mucho amor por Dany y James ♥ 2018';
    }

}
