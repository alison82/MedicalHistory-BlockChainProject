import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSuccessfulCreationComponent } from './doctor-successful-creation.component';

describe('DoctorSuccessfulCreationComponent', () => {
  let component: DoctorSuccessfulCreationComponent;
  let fixture: ComponentFixture<DoctorSuccessfulCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSuccessfulCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSuccessfulCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
