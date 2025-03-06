package com.Rental.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.Rental.model.CarUser;
import com.Rental.service.CarUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/api/auth") // Base URL for authentication
public class LoginController {
    
    @Autowired
    private CarUserService service;

    @Autowired
    private BCryptPasswordEncoder bCrypt;

    // Login Endpoint
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody CarUser loginRequest) {
        CarUser user = service.findByEmail(loginRequest.getEmail());
        
        if (user == null || !bCrypt.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        // Return user role along with success message
        return ResponseEntity.ok().body("{\"message\": \"Login successful\", \"role\": \"" + user.getRole() + "\"}");
    }

    // Register New User
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody CarUser carUser) {
        if (service.findByEmail(carUser.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }

        String encodedPassword = bCrypt.encode(carUser.getPassword());
        carUser.setPassword(encodedPassword);
        service.save(carUser);

        return ResponseEntity.ok().body("User registered successfully");
    }

    // Get User Role (for client-side redirection)
    @GetMapping("/role/{email}")
    public ResponseEntity<?> getUserRole(@PathVariable String email) {
        CarUser user = service.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        return ResponseEntity.ok().body("{\"role\": \"" + user.getRole() + "\"}");
    }
}
