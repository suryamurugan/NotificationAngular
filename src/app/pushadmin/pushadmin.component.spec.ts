import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushadminComponent } from './pushadmin.component';

describe('PushadminComponent', () => {
  let component: PushadminComponent;
  let fixture: ComponentFixture<PushadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
