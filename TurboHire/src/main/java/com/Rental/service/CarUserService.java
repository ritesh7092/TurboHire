package com.Rental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Rental.model.CarUser;
import com.Rental.repository.CarUserRepository;

@Service
public class CarUserService implements UserDetailsService{
		
	 @Autowired
	 private CarUserRepository repository;
	 private String role;
	 private String email; 
	 private String userName; 
	 public void save(CarUser carUser) {
		 repository.save(carUser);
	 }
	 @Override
		public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 
		 CarUser carUser=repository.findById(username).get();
		 role=carUser.getRole();
		 userName=carUser.getUsername();
		 email=carUser.getEmail();
			return carUser;
		}
	 public String getRole() {
		return role; 
	 }
	 public String getUserName() {
			return userName; 
		 }
	 public String getEmail() {
			return email; 
		 }
    public CarUser findByEmail(String email2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByEmail'");
    }
	 
	  
}
