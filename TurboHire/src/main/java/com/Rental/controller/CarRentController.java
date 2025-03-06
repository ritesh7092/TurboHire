package com.Rental.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Rental.model.Car;
import com.Rental.model.CarBooking;
import com.Rental.model.CarVariant;
import com.Rental.model.Customer;
import com.Rental.exception.CustomerLicenceException;
import com.Rental.exception.CustomerStatusException;
import com.Rental.repository.CarBookingDao;
import com.Rental.repository.CarDao;
import com.Rental.repository.CarVariantDao;
import com.Rental.repository.CustomerDao;
import com.Rental.service.CarUserService;
import com.Rental.service.CustomerService;

@RestController
@RequestMapping("/api") // All endpoints will be under /api/
public class CarRentController {

    @Autowired
    private CarVariantDao carVariantDao;
    @Autowired
    private CarDao carDao;
    @Autowired
    private CustomerDao customerDao;
    @Autowired
    private CarUserService service;
    @Autowired
    private CustomerService custService;
    @Autowired
    private CarBookingDao carBookingDao;

    // Add a new variant
    @PostMapping("/variants")
    public ResponseEntity<CarVariant> saveVariant(@RequestBody CarVariant variant) {
        carVariantDao.save(variant);
        return ResponseEntity.ok(variant);
    }

    // Get all variants
    @GetMapping("/variants")
    public ResponseEntity<List<CarVariant>> getVariants() {
        return ResponseEntity.ok(carVariantDao.findAll());
    }

    // Delete a variant
    @DeleteMapping("/variants/{id}")
    public ResponseEntity<String> deleteVariant(@PathVariable String id) {
        carVariantDao.deleteVariantById(id);
        return ResponseEntity.ok("Variant deleted successfully");
    }

    // Add a new car
    @PostMapping("/cars")
    public ResponseEntity<Car> saveCar(@RequestBody Car car) {
        carDao.save(car);
        return ResponseEntity.ok(car);
    }

    // Get all cars
    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getCars() {
        return ResponseEntity.ok(carDao.findAll());
    }

    // Delete a car
    @DeleteMapping("/cars/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable String id) {
        carDao.deleteCarById(id);
        return ResponseEntity.ok("Car deleted successfully");
    }

    // Update a car
    @PutMapping("/cars")
    public ResponseEntity<Car> updateCar(@RequestBody Car car) {
        carDao.save(car);
        return ResponseEntity.ok(car);
    }

    // Add a new customer
    @PostMapping("/customers")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {
        customerDao.save(customer);
        return ResponseEntity.ok(customer);
    }

    // Get all customers
    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getCustomers() {
        return ResponseEntity.ok(customerDao.findAll());
    }

    // Delete a customer
    @DeleteMapping("/customers/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable String id) {
        customerDao.deleteCustomerById(id);
        return ResponseEntity.ok("Customer deleted successfully");
    }

    // Create a booking
    @PostMapping("/bookings")
    public ResponseEntity<CarBooking> createBooking(@RequestBody CarBooking carBooking) {
        String username = service.getUserName();

        // Validate customer status and license
        if (!customerDao.getCustomerStatusByUsername(username)) {
            throw new CustomerStatusException();
        }
        if (!custService.validateCustomerLicenceDate(customerDao.getLicenceExpiryDate(username))) {
            throw new CustomerLicenceException();
        }

        // Calculate rent and store booking
        Double rentRate = carDao.findById(carBooking.getCarNumber()).getRentRate();
        long days = calculateDaysBetween(carBooking.getFromDate(), carBooking.getToDate());
        carBooking.setTotalPayment(rentRate * days);
        carBooking.setStatus("P");
        carBooking.setAdvancePayment(0.0);
        carBooking.setPendingPayment(carBooking.getTotalPayment());

        carBookingDao.save(carBooking);
        return ResponseEntity.ok(carBooking);
    }

    // Get all bookings
    @GetMapping("/bookings")
    public ResponseEntity<List<CarBooking>> getBookings() {
        return ResponseEntity.ok(carBookingDao.findAll());
    }

    // Helper method to calculate days
    private long calculateDaysBetween(String fromDate, String toDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate start = LocalDate.parse(fromDate, formatter);
        LocalDate end = LocalDate.parse(toDate, formatter);
        return ChronoUnit.DAYS.between(start, end);
    }
}

