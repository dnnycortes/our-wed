import { Component, OnInit } from '@angular/core';


const DEADLINE = new Date('Mar 16 2019 00:00:00').getTime();


@Component({
    selector: 'countdown-component',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss']
})


export class CountdownComponent implements OnInit {
    public days: Number;
    public hours: Number;
    public minutes: Number;
    public seconds: Number;


    constructor() { }


    ngOnInit() {
        this.initializeClock();
    }


    initializeClock () {
        const timeinterval = setInterval( () => {
            const timeLeft = this.getTimeRemaining( DEADLINE );

            this.days = timeLeft.days;
            this.hours = timeLeft.hours;
            this.minutes = timeLeft.minutes;
            this.seconds = timeLeft.seconds;

            if ( timeLeft.total <= 0 ) {
                clearInterval(timeinterval);
            }
        }, 1000);
    }


    getTimeRemaining( endtime ) {
        const timeLeft = endtime - new Date().getTime();
        const seconds = Math.floor( (timeLeft / 1000) % 60 );
        const minutes = Math.floor( (timeLeft / 1000 / 60) % 60 );
        const hours = Math.floor( (timeLeft / (1000 * 60 * 60)) % 24 );
        const days = Math.floor( timeLeft / (1000 * 60 * 60 * 24) );
        return {
            'total': timeLeft,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

}
