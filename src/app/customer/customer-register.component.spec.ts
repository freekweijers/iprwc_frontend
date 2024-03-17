import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegisterComponent } from './customer-register.component';

describe('CustomerComponent', () => {
  let component: CustomerRegisterComponent;
  let fixture: ComponentFixture<CustomerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
