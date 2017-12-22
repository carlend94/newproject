import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLoginComponent } from './top-login.component';

describe('TopLoginComponent', () => {
  let component: TopLoginComponent;
  let fixture: ComponentFixture<TopLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
