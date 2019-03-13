import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMangerComponent } from './customer-manger.component';

describe('CustomerMangerComponent', () => {
  let component: CustomerMangerComponent;
  let fixture: ComponentFixture<CustomerMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
