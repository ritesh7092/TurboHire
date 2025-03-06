package com.Rental.repository;

import java.util.List;

import com.Rental.model.Car;

public interface CarDao {
	public void save(Car car);

	public Car findById(String id);

	public List<Car> findAll();

	public void deleteCarById(String id);

	public List<Car> getAvailableCars();
}
