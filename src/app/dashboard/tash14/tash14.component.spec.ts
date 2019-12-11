import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash14Component } from './tash14.component';

describe('Tash14Component', () => {
  let component: Tash14Component;
  let fixture: ComponentFixture<Tash14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
