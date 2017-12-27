import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoShopComponent } from './auto-shop.component';

describe('AutoShopComponent', () => {
  let component: AutoShopComponent;
  let fixture: ComponentFixture<AutoShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
