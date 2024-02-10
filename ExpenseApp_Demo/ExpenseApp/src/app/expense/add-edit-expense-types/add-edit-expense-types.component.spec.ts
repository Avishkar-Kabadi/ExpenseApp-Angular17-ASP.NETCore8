import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExpenseTypesComponent } from './add-edit-expense-types.component';

describe('AddEditExpenseTypesComponent', () => {
  let component: AddEditExpenseTypesComponent;
  let fixture: ComponentFixture<AddEditExpenseTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditExpenseTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditExpenseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
