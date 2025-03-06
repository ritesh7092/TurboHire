package com.Rental.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

import org.springframework.stereotype.Service;

@Service
public class CustomerService {
  public boolean validateCustomerLicenceDate(String licenceDate) {
	  DateTimeFormatter dateFormat=DateTimeFormatter.ofPattern("yyyy-MM-dd");
	  LocalDate expiryDate=LocalDate.parse(licenceDate,dateFormat);
	  LocalDate today=LocalDate.now();
	  final long days=ChronoUnit.DAYS.between(today, expiryDate);
	  if(days>30)
		  return true;
	  else
		  return false;
	  
  }
}
