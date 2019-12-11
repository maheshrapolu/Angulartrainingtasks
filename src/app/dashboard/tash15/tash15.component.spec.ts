import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash15Component } from './tash15.component';

describe('Tash15Component', () => {
  let component: Tash15Component;
  let fixture: ComponentFixture<Tash15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
