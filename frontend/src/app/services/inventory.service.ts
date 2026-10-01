import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:8080/api/inventories'; // simple plural

  constructor(private http: HttpClient) { }

  getAll(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.apiUrl);
  }

  create(item: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.apiUrl, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
