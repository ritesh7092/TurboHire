package com.Rental.repository;

import java.util.List;

import com.Rental.model.Customer;

public interface CustomerDao {
   public void save(Customer customer);
   public Customer findById(String id);
   public List <Customer> findAll();
   public void deleteCustomerById(String id);
   public Boolean getCustomerStatusByUsername(String username);
   public String getLicenceExpiryDate(String username);
}
