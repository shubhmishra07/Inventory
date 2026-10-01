import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../models/inventory.model';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items: Inventory[] = [];

  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.items = data);
  }
}
