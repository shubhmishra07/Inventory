package com.hcl.project.Service;

import com.hcl.project.entity.Inventory;
import com.hcl.project.Repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Inventory> getAll() {
        return inventoryRepository.findAll();
    }

    public Optional<Inventory> getById(Integer id) {
        return inventoryRepository.findById(id);
    }

    public Inventory create(Inventory item) {
        return inventoryRepository.save(item);
    }

    public Inventory update(Integer id, Inventory item) {
        if (inventoryRepository.existsById(id)) {
            // It's a simple CRUD, so we assume the ID is set appropriately inside or we just save over it
            return inventoryRepository.save(item);
        }
        return null;
    }

    public void delete(Integer id) {
        inventoryRepository.deleteById(id);
    }
}
