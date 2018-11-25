import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';


type PaneType = 'left' | 'right' | 'third';


@Component({
    selector: 'slide-panel',
    templateUrl: './slide-panel.component.html',
    styleUrls: ['./slide-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slide', [
            state('left', style({ transform: 'translateX(0)' })),
            state('right', style({ transform: 'translateX(-33.34%)' })),
            state('third', style({ transform: 'translateX(-66.85%)' })),
            transition('* => *', animate(300))
        ])
    ]
})


export class SlidePanelComponent {
    @Input() activePane: PaneType;
}
