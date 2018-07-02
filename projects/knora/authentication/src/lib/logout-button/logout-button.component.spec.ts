import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {KuiCoreModule} from '@knora/core';

import {LogoutButtonComponent} from './logout-button.component';
import {MatButtonModule, MatDialogModule, MatDialogRef} from '@angular/material';

describe('LogoutButtonComponent', () => {
    let component: LogoutButtonComponent;
    let fixture: ComponentFixture<LogoutButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                KuiCoreModule,
                MatButtonModule,
                MatDialogModule
            ],
            providers: [
                {provide: MatDialogRef}
            ],
            declarations: [LogoutButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoutButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
