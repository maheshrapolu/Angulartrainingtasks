import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash11Component } from './tash11.component';

describe('Tash11Component', () => {
  let component: Tash11Component;
  let fixture: ComponentFixture<Tash11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
