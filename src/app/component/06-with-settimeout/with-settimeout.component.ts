import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'with-set-time-out',
    template: `
        <div>
            <div #yameteContainer>yamete</div>
        </div>
    `,
    standalone: true,
    imports: [CommonModule],
})
export class WithSetTimeOutComponent implements AfterViewInit {
    @ViewChild('yameteContainer')
    yameteContainer!: ElementRef;

    constructor() {}

    ngAfterViewInit(): void {
        this.gotoTop();
    }

    gotoTop() {
        setTimeout(() => {
            this.yameteContainer.nativeElement.scrollTop = 0;
        }, 200);
    }
}
