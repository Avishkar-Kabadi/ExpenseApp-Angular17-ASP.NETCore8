import { Component, Input, OnInit } from '@angular/core';
import { ExpenseAPIService } from '../../expense-api.service';

@Component({
  selector: 'app-add-edit-expense-types',
  templateUrl: './add-edit-expense-types.component.html',
  styleUrl: './add-edit-expense-types.component.css'
})
export class AddEditExpenseTypesComponent implements OnInit {

  @Input() expensetypes:any;
  id: number = 0;
  expenseName: string = "";
  totalAmount: Number=0;

  constructor(private service:ExpenseAPIService) { }

  ngOnInit(): void {
    
    this.id = this.expensetypes.id;
    this.expenseName = this.expensetypes.expenseName;
    this.totalAmount = this.expensetypes.totalAmount;


  }

  addExpenseTypes() {
    
    var expensetypes = {
      expenseName:this.expenseName,
      totalAmount:this.totalAmount,

      
    }

    this.service.addExpenseTypes(expensetypes).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close-types');

      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }

      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

  updateExpenseTypes() {
    var expensetypes = {
      id: this.id,
      expenseName:this.expenseName,
      totalAmount:this.totalAmount,

    }

    var id:number = this.id;
    this.service.updateExpenseTypes(id,expensetypes).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close-types');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
{

}
