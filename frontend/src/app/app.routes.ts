import { Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderItemComponent } from './pages/order-item/order-item.component';
import { ProductComponent } from './pages/product/product.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';

export const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-item', component: OrderItemComponent },
  { path: 'product', component: ProductComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' }
];
