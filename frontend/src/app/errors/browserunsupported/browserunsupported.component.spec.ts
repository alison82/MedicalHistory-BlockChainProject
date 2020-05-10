import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserunsupportedComponent } from './browserunsupported.component';

describe('BrowserunsupportedComponent', () => {
  let component: BrowserunsupportedComponent;
  let fixture: ComponentFixture<BrowserunsupportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserunsupportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserunsupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
