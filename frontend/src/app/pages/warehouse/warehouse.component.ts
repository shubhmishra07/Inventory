import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseService } from '../../services/warehouse.service';
import { Warehouse } from '../../models/warehouse.model';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  items: Warehouse[] = [];

  constructor(private service: WarehouseService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.items = data);
  }
}
