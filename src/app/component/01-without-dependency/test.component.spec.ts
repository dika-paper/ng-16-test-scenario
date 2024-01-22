import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { expectText } from '@paper-fe/armstrong/dom';

describe('WithoutDepComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let cmp: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    cmp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders successfully', () => {
    expect(cmp).toBeTruthy();
  });

  it('contains halo', () => {
    expectText(fixture, 'test', 'halo');
  });
});
