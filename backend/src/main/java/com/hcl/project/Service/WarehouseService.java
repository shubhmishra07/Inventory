package com.hcl.project.Service;

import com.hcl.project.entity.Warehouse;
import com.hcl.project.Repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WarehouseService {

    @Autowired
    private WarehouseRepository warehouseRepository;

    public List<Warehouse> getAll() {
        return warehouseRepository.findAll();
    }

    public Optional<Warehouse> getById(Long id) {
        return warehouseRepository.findById(id);
    }

    public Warehouse create(Warehouse item) {
        return warehouseRepository.save(item);
    }

    public Warehouse update(Long id, Warehouse item) {
        if (warehouseRepository.existsById(id)) {
            // It's a simple CRUD, so we assume the ID is set appropriately inside or we just save over it
            return warehouseRepository.save(item);
        }
        return null;
    }

    public void delete(Long id) {
        warehouseRepository.deleteById(id);
    }
}
