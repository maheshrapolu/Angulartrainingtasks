import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash13Component } from './tash13.component';

describe('Tash13Component', () => {
  let component: Tash13Component;
  let fixture: ComponentFixture<Tash13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
