package com.Rental.repository;

import java.util.List;

import com.Rental.model.Car;
import com.Rental.model.CarBooking;

public interface CarBookingDao {
	public void save(CarBooking carBooking);
    public String generateBookingId();
    public CarBooking findById(String id);
	public List<CarBooking> findAll();
	public List<CarBooking> findAllByUsername(String username);
}
