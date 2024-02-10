import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseAPIService {

  readonly expenseAPIUrl = "https://localhost:7007/api";

  // Create Subjects for each entity
  private expenseListSubject = new Subject<any[]>();
  private expenseTypesListSubject = new Subject<any[]>();
  private statusListSubject = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  // expense
  getExpenseList() {
    this.http.get<any>(this.expenseAPIUrl + '/Expenses')
      .subscribe(data => this.expenseListSubject.next(data));
    return this.expenseListSubject.asObservable();
  }

  addExpense(data: any) {
    return this.http.post(this.expenseAPIUrl + '/Expenses', data);
  }

  updateExpense(id: number | string, data: any) {
    return this.http.put(this.expenseAPIUrl + `/Expenses/${id}`, data);
  }

  deleteExpense(id: number | string) {
    return this.http.delete(this.expenseAPIUrl + `/Expenses/${id}`);
  }

  // Eexpense Types
  getExpenseTypesList() {
    this.http.get<any>(this.expenseAPIUrl + '/ExpenseTypes')
      .subscribe(data => this.expenseTypesListSubject.next(data));
    return this.expenseTypesListSubject.asObservable();
  }

  addExpenseTypes(data: any) {
    return this.http.post(this.expenseAPIUrl + '/ExpenseTypes', data);
  }

  updateExpenseTypes(id: number | string, data: any) {
    return this.http.put(this.expenseAPIUrl + `/ExpenseTypes/${id}`, data);
  }

  deleteExpenseTypes(id: number | string) {
    return this.http.delete(this.expenseAPIUrl + `/ExpenseTypes/${id}`);
  }

  // Status
  getStatusList() {
    this.http.get<any>(this.expenseAPIUrl + '/Status')
      .subscribe(data => this.statusListSubject.next(data));
    return this.statusListSubject.asObservable();
  }

  addStatus(data: any) {
    return this.http.post(this.expenseAPIUrl + '/Status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.expenseAPIUrl + `/Status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.expenseAPIUrl + `/Status/${id}`);
  }
}
