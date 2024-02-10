import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseAPIService } from '../../expense-api.service';


interface ExpenseItem {
  id: number;
  status: string;
  amount: number ; 
  pendingAmount: Number;// Assuming amount is a number, adjust the type accordingly
  comments: string;
  userDate: string; // Assuming userDate is a string, adjust the type accordingly
  expenseTypeId: number;
}


@Component({
  selector: 'app-show-expense',
  templateUrl: './show-expense.component.html',
  styleUrl: './show-expense.component.css'
})
export class ShowExpenseComponent implements OnInit {

  expenseList$!:Observable<any[]>;
  expenseTypesList$!:Observable<any[]>;
  statusList$!: Observable<any[]>;
  expenseTypesList:any=[];
  totalExpense: number = 0;
  totalPendingAmount: number=0;
  totalPaidAmount:number=0; // Store the total expense
  // Map to display data associate with foreign keys
  expenseTypesMap:Map<number, string> = new Map()
  

  constructor(private service:ExpenseAPIService) { }

  ngOnInit(): void {

    this.expenseList$ = this.service.getExpenseList();
    this.expenseTypesList$ = this.service.getExpenseTypesList();
    this.statusList$ = this.service.getStatusList();
    this.refreshExpenseTypesMap();
    
    var showUpdateSuccess = document.getElementById('update-success-alert');
    if(showUpdateSuccess) {
      showUpdateSuccess.style.display = "none";
    }
    
    var showAddSuccess = document.getElementById('add-success-alert');
    if(showAddSuccess) {
      showAddSuccess.style.display = "none";
    }
    
    var showdeleteSuccess = document.getElementById('delete-success-alert');
    if(showdeleteSuccess) {
      showdeleteSuccess.style.display = "none";
    }
    
    var showdeleteError = document.getElementById('delete-error-alert');
    if(showdeleteError) {
      showdeleteError.style.display = "none";
    }

    this.expenseList$ = this.service.getExpenseList();
    // Subscribe only once to calculate the initial total expense
    this.expenseList$.subscribe(items => {
      this.calculateTotalExpense(items);
    });
    this.expenseList$ = this.service.getExpenseList();
    // Subscribe only once to calculate the initial total expense
    this.expenseList$.subscribe(items => {
      this.calculateTotalPendingAmount(items);
    });
  }

  calculateTotalExpense(items: ExpenseItem[] | null): number {
    if (items) {
      return items.reduce((total, item) => total + Number(item.amount || 0), 0);
    }
    return 0;
  }

  calculateTotalPendingAmount(items: ExpenseItem[] | null): number {
    if (items) {
      return items.reduce((total, item) => total + Number(item.pendingAmount || 0), 0);
    }
    return 0;
  }

  
  // Variables (properties)
  modalTitle:string = '';
  activateAddEditExpenseComponent:boolean = false;
  activateAddEditStatusComponent:boolean = false;
  activateAddEditTypesComponent:boolean = false;
  
  expense:any;
  status:any;
  expensetypes:any;

  modalAdd() {
    this.expense = {
      id:0,
      status:null,
      comments:null,
      expenseTypeId:null,
      totalAmount:null,
      pendingAmount:null,
    }
    this.modalTitle = "Add Expense";
    this.activateAddEditExpenseComponent = true;
  }

  modalEdit(item:any) {
    this.expense = item;
    this.modalTitle = "Edit Expense";
    this.activateAddEditExpenseComponent = true;
  }

  modalClose() {
    this.activateAddEditExpenseComponent = false;
    this.expenseList$ = this.service.getExpenseList();
  }

  modalAddStatus() {
    this.status = {
      id:0,
      statusOption:null,
    }
    this.modalTitle = "Add Status";
    this.activateAddEditStatusComponent = true;
  }

  modalEditStatus(item:any) {
    this.status = item;
    this.modalTitle = "Edit Status";
    this.activateAddEditStatusComponent = true;
  }

  modalCloseStatus() {
    this.activateAddEditStatusComponent = false;
    this.statusList$ = this.service.getStatusList();
  }

  modalAddTypes() {
    this.expensetypes = {
      id:0,
      expenseName:null,
      totalAmount:null,
    }
    this.modalTitle = "Add Types";
    this.activateAddEditTypesComponent = true;
  }

  modalEditTypes(item:any) {
    this.expensetypes = item;
    this.modalTitle = "Edit Types";
    this.activateAddEditTypesComponent = true;
  }

  modalCloseTypes() {
    this.activateAddEditTypesComponent = false;
    this.expenseTypesList$ = this.service.getExpenseTypesList();
  }
  
  delete(item:any) {
    if(confirm(`Are you sure you want to delete Expense ${item.id}`)) {
      this.service.deleteExpense(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.expenseList$ = this.service.getExpenseList();
      })
    }
  }
  
  delete_types(item:any) {

    if(confirm(`Are you sure you want to delete type ${item.expenseName} and Expense related?`)) { 

      this.service.deleteExpenseTypes(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.expenseTypesList$ = this.service.getExpenseTypesList();
      })
    }
  }
  
  delete_status(item:any) {
    if(confirm(`Are you sure you want to delete status ${item.id}?`)) {
      this.service.deleteStatus(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.statusList$ = this.service.getStatusList();
      })
    }
  }

  refreshExpenseTypesMap() {
    this.service.getExpenseTypesList().subscribe(data => {
      this.expenseTypesList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.expenseTypesMap.set(this.expenseTypesList[i].id, 
          this.expenseTypesList[i].expenseName);
      }
    })
  }

}
