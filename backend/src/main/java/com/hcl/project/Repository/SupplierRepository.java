package com.hcl.project.Repository;

import com.hcl.project.entity.Product;
import com.hcl.project.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
