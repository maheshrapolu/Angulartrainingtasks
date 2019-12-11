import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash17Component } from './tash17.component';

describe('Tash17Component', () => {
  let component: Tash17Component;
  let fixture: ComponentFixture<Tash17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
