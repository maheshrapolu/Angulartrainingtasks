import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash16Component } from './tash16.component';

describe('Tash16Component', () => {
  let component: Tash16Component;
  let fixture: ComponentFixture<Tash16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
