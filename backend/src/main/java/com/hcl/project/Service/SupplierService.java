package com.hcl.project.Service;

import com.hcl.project.entity.Supplier;
import com.hcl.project.Repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAll() {
        return supplierRepository.findAll();
    }

    public Optional<Supplier> getById(Long id) {
        return supplierRepository.findById(id);
    }

    public Supplier create(Supplier item) {
        return supplierRepository.save(item);
    }

    public Supplier update(Long id, Supplier item) {
        if (supplierRepository.existsById(id)) {
            // It's a simple CRUD, so we assume the ID is set appropriately inside or we just save over it
            return supplierRepository.save(item);
        }
        return null;
    }

    public void delete(Long id) {
        supplierRepository.deleteById(id);
    }
}
