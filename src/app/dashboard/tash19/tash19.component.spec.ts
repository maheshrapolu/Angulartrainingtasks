import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tash19Component } from './tash19.component';

describe('Tash19Component', () => {
  let component: Tash19Component;
  let fixture: ComponentFixture<Tash19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tash19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tash19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
