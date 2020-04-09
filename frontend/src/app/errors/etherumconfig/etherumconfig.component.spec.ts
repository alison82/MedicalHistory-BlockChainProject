import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherumconfigComponent } from './etherumconfig.component';

describe('EtherumconfigComponent', () => {
  let component: EtherumconfigComponent;
  let fixture: ComponentFixture<EtherumconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherumconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherumconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
