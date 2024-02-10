import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseAPIService } from '../../expense-api.service';


@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrl: './add-edit-expense.component.css'
})
export class AddEditExpenseComponent implements OnInit {

  @Input() expense:any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  expenseName: string="";
  expenseTypeId!:Number;
  pendingAmount!:Number;
  payingAmount:Number=0;
  totalAmount:Number=0;
  selectedDate: Date = new Date;
  expenseList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  expenseTypesList$!: Observable<any[]>;
  expenseTypesList: any[] = [];  
  


  

  constructor(private service:ExpenseAPIService) { }
  ngOnInit(): void {
    
    this.id = this.expense.id;
    this.status = this.expense.status;
    this.comments = this.expense.comments;
    this.selectedDate = this.expense.selectedDate;
    this.pendingAmount = this.expense.pendingAmount;
    this.payingAmount = this.expense.payingAmount;
    this.expenseName = this.expense.expenseName;
    this.expenseTypeId =this.expense.expenseTypeId;
    this.statusList$ = this.service.getStatusList();
    this.expenseList$ = this.service.getExpenseList();
    this.expenseTypesList$ = this.service.getExpenseTypesList();
    this.expenseTypesList$.subscribe(types => {
      console.log(types); 
      this.expenseTypesList = types;
      this.updateTotalAmount();
    });

    
    

  }



  updateTotalAmount() {
    console.log('Updating totalAmount:', this.expenseName);
  
    this.expenseTypesList$.subscribe(types => {
      console.log('Fetched types:', types);
      
      const selectedType = types.find(type => type.expenseName === this.expenseName);
      this.totalAmount = selectedType ? selectedType.totalAmount : 0;
  
      console.log('Updated totalAmount:', this.totalAmount);
    });
  }
  
  


  private getTotalAmountByexpenseName(expenseName: string): number {
    const selectedType = this.expenseTypesList.find(type => type.expenseName === expenseName);

    return selectedType ? selectedType.totalAmount : 0;
  }

  addExpense() {
    var expense = {
      status:this.status,
      comments:this.comments,
      selectedDate:this.selectedDate,
      payingAmount:this.payingAmount,
      totalAmount:this.totalAmount,
      expenseName:this.expenseName,
      expenseTypeId :this.expenseTypeId,
      pendingAmount:this.pendingAmount,

    }

    this.service.addExpense(expense).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');

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

  

  updateExpense() {
    var expense = {
      id: this.id,
      status:this.status,
      comments:this.comments,
      expenseName:this.expenseName,
      expenseTypeId :this.expenseTypeId,
      selectedDate:this.selectedDate,
      payingAmount:this.payingAmount,
      totalAmount:this.totalAmount,
      pendingAmount:this.pendingAmount,

       }
    var id:number = this.id;
    this.service.updateExpense(id,expense).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
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