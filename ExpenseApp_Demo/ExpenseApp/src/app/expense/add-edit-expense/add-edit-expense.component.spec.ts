import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExpenseComponent } from './add-edit-expense.component';

describe('AddEditExpenseComponent', () => {
  let component: AddEditExpenseComponent;
  let fixture: ComponentFixture<AddEditExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditExpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
