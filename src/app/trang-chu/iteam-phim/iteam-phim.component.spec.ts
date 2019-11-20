import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamPhimComponent } from './iteam-phim.component';

describe('IteamPhimComponent', () => {
  let component: IteamPhimComponent;
  let fixture: ComponentFixture<IteamPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteamPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
