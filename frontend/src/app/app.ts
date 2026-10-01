import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Api } from './api';
import { Observable, forkJoin } from 'rxjs';

type EntityType = 'Dashboard' | 'Products' | 'Warehouses' | 'Suppliers' | 'Orders' | 'OrderItems' | 'Inventories';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  private api = inject(Api);
  private cdr = inject(ChangeDetectorRef);

  tabs: EntityType[] = ['Dashboard', 'Products', 'Warehouses', 'Suppliers', 'Orders', 'OrderItems', 'Inventories'];
  activeTab: EntityType = 'Dashboard';
  items: any[] = [];
  isLoading = false;
  
  // Dashboard Stats
  dashboardStats = {
    products: 0,
    warehouses: 0,
    suppliers: 0,
    orders: 0
  };
  
  // Modal State
  showModal = false;
  modalMode: 'Create' | 'Edit' = 'Create';
  formData: any = {};
  
  ngOnInit() {
    this.loadData();
  }

  setTab(tab: EntityType) {
    this.activeTab = tab;
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.items = [];
    this.cdr.detectChanges();

    if (this.activeTab === 'Dashboard') {
      forkJoin({
        products: this.api.getProducts(),
        warehouses: this.api.getWarehouses(),
        suppliers: this.api.getSuppliers(),
        orders: this.api.getOrders()
      }).subscribe(data => {
        this.dashboardStats = {
          products: data.products.length,
          warehouses: data.warehouses.length,
          suppliers: data.suppliers.length,
          orders: data.orders.length
        };
        this.isLoading = false;
        this.cdr.detectChanges();
      });
      return;
    }

    const handleData = (data: any[]) => {
      this.items = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    };

    switch (this.activeTab) {
      case 'Products': this.api.getProducts().subscribe(handleData); break;
      case 'Warehouses': this.api.getWarehouses().subscribe(handleData); break;
      case 'Suppliers': this.api.getSuppliers().subscribe(handleData); break;
      case 'Orders': this.api.getOrders().subscribe(handleData); break;
      case 'OrderItems': this.api.getOrderItems().subscribe(handleData); break;
      case 'Inventories': this.api.getInventories().subscribe(handleData); break;
    }
  }

  deleteItem(id: number) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    this.isLoading = true;
    this.cdr.detectChanges();
    
    const reload = () => this.loadData();

    switch (this.activeTab) {
      case 'Products': this.api.deleteProduct(id).subscribe(reload); break;
      case 'Warehouses': this.api.deleteWarehouse(id).subscribe(reload); break;
      case 'Suppliers': this.api.deleteSupplier(id).subscribe(reload); break;
      case 'Orders': this.api.deleteOrder(id).subscribe(reload); break;
      case 'OrderItems': this.api.deleteOrderItem(id).subscribe(reload); break;
      case 'Inventories': this.api.deleteInventory(id).subscribe(reload); break;
    }
  }

  openCreateModal() {
    this.modalMode = 'Create';
    this.formData = {};
    this.showModal = true;
    this.cdr.detectChanges();
  }

  openEditModal(item: any) {
    this.modalMode = 'Edit';
    this.formData = { ...item };
    this.showModal = true;
    this.cdr.detectChanges();
  }

  closeModal() {
    this.showModal = false;
    this.cdr.detectChanges();
  }

  saveItem() {
    const isEdit = this.modalMode === 'Edit';
    const id = this.formData.id;
    let request: Observable<any> | undefined;

    switch (this.activeTab) {
      case 'Products': request = isEdit ? this.api.updateProduct(id, this.formData) : this.api.createProduct(this.formData); break;
      case 'Warehouses': request = isEdit ? this.api.updateWarehouse(id, this.formData) : this.api.createWarehouse(this.formData); break;
      case 'Suppliers': request = isEdit ? this.api.updateSupplier(id, this.formData) : this.api.createSupplier(this.formData); break;
      case 'Orders': request = isEdit ? this.api.updateOrder(id, this.formData) : this.api.createOrder(this.formData); break;
      case 'OrderItems': request = isEdit ? this.api.updateOrderItem(id, this.formData) : this.api.createOrderItem(this.formData); break;
      case 'Inventories': request = isEdit ? this.api.updateInventory(id, this.formData) : this.api.createInventory(this.formData); break;
    }

    if (request) {
      this.isLoading = true;
      this.cdr.detectChanges();
      request.subscribe(() => {
        this.closeModal();
        this.loadData();
      });
    }
  }

  // Helper to dynamically get keys for table headers
  get keys() {
    if (this.items.length > 0) return Object.keys(this.items[0]);
    return [];
  }
}
