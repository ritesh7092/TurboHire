package com.Rental.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class CarVariant {
    @Id
    private String variantId;
	private Integer numberOfSeat;
	private String fuel;
	private String variantName;
	public CarVariant() {
		super();
	}
	
	public Integer getNumberOfSeat() {
		return numberOfSeat;
	}
	public void setNumberOfSeat(Integer numberOfSeat) {
		this.numberOfSeat = numberOfSeat;
	}
	
	public String getVariantId() {
		return variantId;
	}

	public void setVariantId(String variantId) {
		this.variantId = variantId;
	}

	public String getVariantName() {
		return variantName;
	}

	public void setVariantName(String variantName) {
		this.variantName = variantName;
	}

	public String getFuel() {
		return fuel;
	}
	public void setFuel(String fuel) {
		this.fuel = fuel;
	}
	public CarVariant(Integer numberOfSeat, String fuel, String variantId, String variantName) {
		super();
		this.numberOfSeat = numberOfSeat;
		this.fuel = fuel;
		this.variantId = variantId;
		this.variantName = variantName;
	}
    

	public CarVariant(String variantId) {
		// TODO Auto-generated constructor stub
		super();
		this.variantId=variantId;
	}

	@Override
	public String toString() {
		return "CarVariant [numberOfSeat=" + numberOfSeat + ", fuel=" + fuel + ", variantId=" + variantId
				+ ", variantName=" + variantName + "]";
	}
	
	
}
