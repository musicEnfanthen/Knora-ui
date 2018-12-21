import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentFeaturesComponent } from './experiment-features.component';

describe('ExperimentFeaturesComponent', () => {
  let component: ExperimentFeaturesComponent;
  let fixture: ComponentFixture<ExperimentFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
