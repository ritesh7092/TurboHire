package com.Rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Rental.model.CarUser;

public interface CarUserRepository extends JpaRepository<CarUser, String> {

}
