import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../models/order-item.model';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  items: OrderItem[] = [];

  constructor(private service: OrderItemService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.items = data);
  }
}
