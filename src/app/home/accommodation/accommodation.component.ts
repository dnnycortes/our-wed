import { Component } from '@angular/core';


@Component({
    selector: 'accommodation',
    templateUrl: './accommodation.component.html',
    styleUrls: ['./accommodation.component.scss']
})


export class AccommodationComponent {
    airnbWishList = "https://www.airbnb.mx/wishlists/413519290";
    hotelsSuggestions1 = [
        {
            'name': 'Hotel holiday inn express toreo',
            'price': 1280,
            'distance': 'A 5 min de la Hacienda',
            'location': 'https://goo.gl/maps/XgJZTuZ1eem',
            'reservation': 'https://www.ihg.com/holidayinnexpress/hotels/us/es/naucalpan/mexan/hoteldetail',
            'image': 'assets/imgs/hotel-holiday-inn-express-toreo.png'
        },
        {
            'name': 'Scala Magna Suites & Villas',
            'price': 1230,
            'distance': 'A 10 min de la Hacienda',
            'location': 'https://goo.gl/maps/LsufFEmJMNP2',
            'reservation': 'http://www.hotelscala-magna.com/reservaciones.htm',
            'image': 'assets/imgs/hotel-scala-magna.png'
        },
        {
            'name': 'City express Gustavo Baz',
            'price': 1200,
            'distance': 'A 16 min de la Hacienda y 13 min de la Catedral',
            'location': 'https://goo.gl/maps/nAezeef3Xvj',
            'reservation': 'https://www.cityexpress.com/express/hoteles-mexico/estado-de-mexico/tlalnepantla-de-baz/gustavo-baz',
            'image': 'assets/imgs/hotel-city-express-gustavo-baz.png'
        },
        {
            'name': 'Hotel Valle de México',
            'price': 980,
            'distance': 'A 8 min de la Hacienda',
            'location': 'https://goo.gl/maps/RsayZ1vYUDr',
            'reservation': 'https://hotelvalledemexico.com.mx/es/',
            'image': 'assets/imgs/hotel-valle-de-mexico.png' 
        },
        {
            'name': 'Ibis Tlalnepantla',
            'price': 850,
            'distance': 'A 21 min de la Hacienda y 5 min de la Catedral',
            'location': 'https://goo.gl/maps/7N3KNGcoASR2',
            'reservation': 'http://www.booking.com/Share-R00V48',
            'image': 'assets/imgs/hotel-ibis-tlalnepantla.png'
        },
        {
            'name': 'Hotel Mandarín Cárton',
            'price': 800,
            'distance': 'A 18 min de la Hacienda',
            'location': 'https://goo.gl/maps/PUA21S4W72v',
            'reservation': 'http://www.booking.com/Share-N66Pgm',
            'image': 'assets/imgs/hotel-mandarin-carton.png'
        },
        {
            'name': 'Hotel El Conde',
            'price': 600,
            'distance': 'A 7 min de la Hacienda',
            'location': 'https://goo.gl/maps/Mpg2uVMVv642',
            'reservation': 'http://www.hotelelconde.com.mx/',
            'image': 'assets/imgs/hotel-el-conde.png'
        },
        {
            'name': 'Hotel Villa del parque - Armas',
            'price': 600,
            'distance': 'A 20 min de la Hacienda y 20 min de la Catedral',
            'location': 'https://goo.gl/maps/BtZaEX6xLbN2',
            'reservation': 'http://hotelvilladelparque.com/ahabitaciones.html',
            'image': 'assets/imgs/hotel-villa-del-parque.png'
        },
        {
            'name': 'Hotel Santa Cruz',
            'price': 500,
            'distance': 'A 22 min de la Hacienda y 10 min de la Catedral',
            'location': 'https://goo.gl/maps/1ii1a9Nm94R2',
            'reservation': 'http://www.booking.com/Share-KKmVWs',
            'image': 'assets/imgs/hotel-santa-cruz.png'
        }
    ];

    public getHotelsSlides() {
        let n = 1;
        return Array.apply(null, Array( ( Math.ceil( this.hotelsSuggestions1.length / 3 ) ) ) ).map( function() { return n++ * 3 } );
    }

    public getHotelArray( start, end ) {
        return this.hotelsSuggestions1.slice( start, end );
    }
}
