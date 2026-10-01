package com.hcl.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int quantity;

    @Column
    private int productId;

    @Column
    private int warehouseId;

    @Column
    private int minimumThreshold;

    public Inventory() {
    }

    public Inventory(int id, int quantity, int productId, int warehouseId, int minimumThreshold) {
        this.id = id;
        this.quantity = quantity;
        this.productId = productId;
        this.warehouseId = warehouseId;
        this.minimumThreshold = minimumThreshold;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(int warehouseId) {
        this.warehouseId = warehouseId;
    }

    public int getMinimumThreshold() {
        return minimumThreshold;
    }

    public void setMinimumThreshold(int minimumThreshold) {
        this.minimumThreshold = minimumThreshold;
    }
}
