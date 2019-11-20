import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamPhimSapChieuComponent } from './iteam-phim-sap-chieu.component';

describe('IteamPhimSapChieuComponent', () => {
  let component: IteamPhimSapChieuComponent;
  let fixture: ComponentFixture<IteamPhimSapChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteamPhimSapChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamPhimSapChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
