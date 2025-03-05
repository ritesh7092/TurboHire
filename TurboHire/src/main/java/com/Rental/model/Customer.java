package com.Rental.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Customer {

	@Id
	private String username;
	private String firstName;
	private String lastName;
	private String address;
	private String email;
	private Long mobile;
	private String license;
	private String experiryDate;
	private Boolean status;
	public Customer(String username, String firstName, String lastName, String address, String email, Long mobile,
			String license, String experiryDate, Boolean status) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.email = email;
		this.mobile = mobile;
		this.license = license;
		this.experiryDate = experiryDate;
		this.status=status;	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Customer(String username, String email) {
		super();
		this.username = username;
		this.email = email;
		this.status = true;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getMobile() {
		return mobile;
	}
	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}
	public String getLicense() {
		return license;
	}
	public void setLicense(String license) {
		this.license = license;
	}
	public String getExperiryDate() {
		return experiryDate;
	}
	public void setExperiryDate(String experiryDate) {
		this.experiryDate = experiryDate;
	}
	
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Customer [username=" + username + ", firstName=" + firstName + ", lastName=" + lastName + ", address="
				+ address + ", email=" + email + ", mobile=" + mobile + ", license=" + license +", status="+status+ ", experiryDate="
				+ experiryDate + "]";
	}
	 
	
}

