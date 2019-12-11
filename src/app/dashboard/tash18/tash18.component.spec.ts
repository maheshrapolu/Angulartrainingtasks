import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash18Component } from './tash18.component';

describe('Tash18Component', () => {
  let component: Tash18Component;
  let fixture: ComponentFixture<Tash18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
