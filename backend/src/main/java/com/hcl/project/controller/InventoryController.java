package com.hcl.project.controller;

import com.hcl.project.entity.Inventory;
import com.hcl.project.Service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventories")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping
    public List<Inventory> getAll() {
        return inventoryService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inventory> getById(@PathVariable Integer id) {
        Optional<Inventory> item = inventoryService.getById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Inventory create(@RequestBody Inventory item) {
        return inventoryService.create(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inventory> update(@PathVariable Integer id, @RequestBody Inventory item) {
        Inventory updated = inventoryService.update(id, item);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        inventoryService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
