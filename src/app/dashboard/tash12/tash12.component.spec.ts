import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash12Component } from './tash12.component';

describe('Tash12Component', () => {
  let component: Tash12Component;
  let fixture: ComponentFixture<Tash12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
