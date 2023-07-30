import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemcartComponent } from './themcart.component';

describe('ThemcartComponent', () => {
  let component: ThemcartComponent;
  let fixture: ComponentFixture<ThemcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemcartComponent]
    });
    fixture = TestBed.createComponent(ThemcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
