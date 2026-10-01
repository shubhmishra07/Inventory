import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from '../models/order-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private apiUrl = 'http://localhost:8080/api/order-items'; // simple plural

  constructor(private http: HttpClient) { }

  getAll(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.apiUrl);
  }

  create(item: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.apiUrl, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
