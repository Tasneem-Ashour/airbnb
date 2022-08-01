import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Transactions } from '../_models/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(public http:HttpClient) { }

  getAllPTransaction():Observable<Transactions[]>{
    return this.http.get<Transactions[]>(`${environment.APIURL}/ArTransactions`);
  }

  
  AddTransaction(AddTransaction:Transactions){
    return this.http.post<Transactions>(`${environment.APIURL}/ArTransactions`,AddTransaction);
  }

  updateTransaction(updateTransaction:Transactions){
    return this.http.put<Transactions>(`${environment.APIURL}/ArTransactions/${updateTransaction.id}`,updateTransaction);
  }

  deleteTransaction(deleteTransaction:Transactions){
    return this.http.put<Transactions>(`${environment.APIURL}/ArTransactions/Delete/${deleteTransaction.id}`,deleteTransaction);
  }
}


