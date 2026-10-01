import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.model';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  items: Supplier[] = [];

  constructor(private service: SupplierService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.items = data);
  }
}
