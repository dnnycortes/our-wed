import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';


type PaneType = 'left' | 'right';


@Component({
    selector: 'slide-panel',
    templateUrl: './slide-panel.component.html',
    styleUrls: ['./slide-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slide', [
            state('left', style({ transform: 'translateX(0)' })),
            state('right', style({ transform: 'translateX(-50%)' })),
            transition('* => *', animate(300))
        ])
    ]
})


export class SlidePanelComponent {
    @Input() activePane: PaneType = 'left';
}
