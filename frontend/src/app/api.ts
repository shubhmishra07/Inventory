import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Warehouse {
  id?: number;
  facilityName: string;
  contactPerson: string;
  contactEmail: string;
  phone: string;
}

export interface Supplier {
  id?: number;
  companyName: string;
  contactPerson: string;
  contactEmail: string;
  phone: number;
}

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  supplierId: number;
}

export interface OrderItem {
  id?: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface Order {
  id?: number;
  orderNumber: string;
  customerName: string;
  shippingAddress: string;
  status: string;
  totalAmount: number;
}

export interface Inventory {
  id?: number;
  quantity: number;
  productId: number;
  warehouseId: number;
  minimumThreshold: number;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private apiUrl = '/api'; // Adjust base URL as needed

  // --- Warehouses ---
  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.apiUrl}/warehouses`);
  }

  getWarehouse(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.apiUrl}/warehouses/${id}`);
  }

  createWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(`${this.apiUrl}/warehouses`, warehouse);
  }

  updateWarehouse(id: number, warehouse: Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(`${this.apiUrl}/warehouses/${id}`, warehouse);
  }

  deleteWarehouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/warehouses/${id}`);
  }

  // --- Suppliers ---
  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/suppliers`);
  }

  getSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/suppliers/${id}`);
  }

  createSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiUrl}/suppliers`, supplier);
  }

  updateSupplier(id: number, supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiUrl}/suppliers/${id}`, supplier);
  }

  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/suppliers/${id}`);
  }

  // --- Products ---
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }

  // --- Order Items ---
  getOrderItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.apiUrl}/order-items`);
  }

  getOrderItem(id: number): Observable<OrderItem> {
    return this.http.get<OrderItem>(`${this.apiUrl}/order-items/${id}`);
  }

  createOrderItem(orderItem: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(`${this.apiUrl}/order-items`, orderItem);
  }

  updateOrderItem(id: number, orderItem: OrderItem): Observable<OrderItem> {
    return this.http.put<OrderItem>(`${this.apiUrl}/order-items/${id}`, orderItem);
  }

  deleteOrderItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/order-items/${id}`);
  }

  // --- Orders ---
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/orders/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/orders/${id}`, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/orders/${id}`);
  }

  // --- Inventories ---
  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiUrl}/inventories`);
  }

  getInventory(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.apiUrl}/inventories/${id}`);
  }

  createInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(`${this.apiUrl}/inventories`, inventory);
  }

  updateInventory(id: number, inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.apiUrl}/inventories/${id}`, inventory);
  }

  deleteInventory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/inventories/${id}`);
  }
}
