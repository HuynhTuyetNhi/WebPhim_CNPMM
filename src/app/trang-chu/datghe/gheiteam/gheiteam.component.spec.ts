import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GheiteamComponent } from './gheiteam.component';

describe('GheiteamComponent', () => {
  let component: GheiteamComponent;
  let fixture: ComponentFixture<GheiteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GheiteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GheiteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
