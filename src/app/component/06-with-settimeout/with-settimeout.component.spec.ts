import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WithSetTimeOutComponent } from './with-settimeout.component';

describe('WithSetTimeOutComponent', () => {
    let component: WithSetTimeOutComponent;
    let fixture: ComponentFixture<WithSetTimeOutComponent>;
    let debugEl: DebugElement;
    let nativeEl: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WithSetTimeOutComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        nativeEl = debugEl.nativeElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should runs gotoTop() method after ngAfterViewInit()', () => {
        const spyOnGotoTop = jest.spyOn(component, 'gotoTop');

        component.ngAfterViewInit();

        expect(spyOnGotoTop).toHaveBeenCalled();
    });

    it('should run callback in the gotoTop() method after timeout has finished', fakeAsync(() => {
        const spyOnGotoTop = jest.spyOn(component, 'gotoTop');
        component.yameteContainer.nativeElement.scrollTop = 1;

        expect(component.yameteContainer.nativeElement.scrollTop).toEqual(1)

        component.gotoTop();
        tick(200);
        fixture.detectChanges();

        // Now our callback inside setTimeout() should have been called!
        fixture.whenStable().then(() => {
            expect(spyOnGotoTop).toHaveBeenCalled();
            expect(component.yameteContainer.nativeElement.scrollTop).toEqual(0)
        });
    }));
});
