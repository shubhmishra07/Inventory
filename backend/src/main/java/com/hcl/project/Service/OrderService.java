package com.hcl.project.Service;

import com.hcl.project.entity.Order;
import com.hcl.project.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public Optional<Order> getById(Long id) {
        return orderRepository.findById(id);
    }

    public Order create(Order item) {
        return orderRepository.save(item);
    }

    public Order update(Long id, Order item) {
        if (orderRepository.existsById(id)) {
            // It's a simple CRUD, so we assume the ID is set appropriately inside or we just save over it
            return orderRepository.save(item);
        }
        return null;
    }

    public void delete(Long id) {
        orderRepository.deleteById(id);
    }
}
