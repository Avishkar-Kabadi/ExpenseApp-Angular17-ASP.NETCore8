import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddEditStatusComponent } from './expense/add-edit-status/add-edit-status.component';
import { AddEditExpenseComponent } from './expense/add-edit-expense/add-edit-expense.component';
import { AddEditExpenseTypesComponent } from './expense/add-edit-expense-types/add-edit-expense-types.component';
import { ExpenseAPIService } from './expense-api.service';
import { ShowExpenseComponent } from './expense/show-expense/show-expense.component';
import { ExpenseComponent } from './expense/expense.component';


@NgModule({
  declarations: [
    AppComponent, 
    AddEditStatusComponent,
    AddEditExpenseComponent,
    AddEditExpenseTypesComponent,
    ShowExpenseComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ExpenseAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }