package com.Rental.repository;

import java.util.List;

import com.Rental.model.CarVariant;

public interface CarVariantDao {
  public void save(CarVariant carVariant);
  public String generateVariantId();
  public CarVariant findById(String id);
  public List<CarVariant> findAll();
  public void deleteVariantById(String id);
  public List<String> getAllVariantIds();
}
