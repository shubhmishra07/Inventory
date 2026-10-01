package com.hcl.project.Service;

import com.hcl.project.entity.Product;
import com.hcl.project.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }

    public Product create(Product item) {
        return productRepository.save(item);
    }

    public Product update(Long id, Product item) {
        if (productRepository.existsById(id)) {
            // It's a simple CRUD, so we assume the ID is set appropriately inside or we just save over it
            return productRepository.save(item);
        }
        return null;
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
