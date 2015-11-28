package com.senchacrm.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.senchacrm.domain.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query("SELECT x FROM Customer x ORDER BY x.id DESC")
    List<Customer> findAllOrderByName();

    @Query("SELECT x FROM Customer x ORDER BY x.id DESC")
    Page<Customer> findAllOrderByName(Pageable pageable);
}
