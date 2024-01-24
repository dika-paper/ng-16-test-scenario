import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import { TestComponent } from './test.component';

const TestServiceStub: Partial<TestService> = {
    foo: jest.fn().mockImplementation(() => 'mocked foo'),
};

describe('Component That Depend To a Service (Using TestBed)', () => {
    let service: TestService;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [{ provide: TestService, useValue: TestServiceStub }],
        });
        service = TestBed.inject(TestService);
        component = TestBed.createComponent(TestComponent).componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});

describe('Component That Depend To a Service (As a TS Class)', () => {
    let component: TestComponent;

    beforeEach(() => {
        component = new TestComponent(TestServiceStub as TestService);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});