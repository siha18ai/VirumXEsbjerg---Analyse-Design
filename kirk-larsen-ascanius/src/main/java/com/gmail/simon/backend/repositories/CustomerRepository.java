package com.gmail.simon.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gmail.simon.backend.data.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
