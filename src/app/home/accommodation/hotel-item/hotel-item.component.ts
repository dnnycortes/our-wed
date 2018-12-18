import { Component, Input } from '@angular/core';


@Component({
    selector: 'hotel-item-component',
    templateUrl: './hotel-item.component.html',
    styleUrls: ['./hotel-item.component.scss']
})


export class HotelItemComponent {
    @Input() hotels: any[];
}
