package com.Rental.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;
import java.util.Collection;



@Entity
public class CarUser extends User {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    @NotBlank
	@Size(min = 5, message = "Username must be at least 5 characters long")
	@Column(nullable = false, unique = true)
	@Id
    private String username;
    private String email;
    private String password;
    private String role;

    public CarUser() {
        super("abc","pqr",new ArrayList<>());
    }

    public CarUser(String username, String password, Collection<? extends GrantedAuthority> authorities,
                   String username1, String email, String password1, String role) {
        super(username, password, authorities);
        this.username = username1;
        this.email = email;
        this.password = password1;
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "CarUser{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
