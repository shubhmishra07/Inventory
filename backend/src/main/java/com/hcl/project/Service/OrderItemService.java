package com.hcl.project.Service;

import com.hcl.project.entity.OrderItem;
import com.hcl.project.Repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItem> getAll() {
        return orderItemRepository.findAll();
    }

    public Optional<OrderItem> getById(Long id) {
        return orderItemRepository.findById(id);
    }

    public OrderItem create(OrderItem item) {
        return orderItemRepository.save(item);
    }

    public OrderItem update(Long id, OrderItem item) {
        if (orderItemRepository.existsById(id)) {
            // It's a simple CRUD, so we assume the ID is set appropriately inside or we just save over it
            return orderItemRepository.save(item);
        }
        return null;
    }

    public void delete(Long id) {
        orderItemRepository.deleteById(id);
    }
}
