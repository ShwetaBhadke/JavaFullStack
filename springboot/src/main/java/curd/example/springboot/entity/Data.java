package curd.example.springboot.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCT_DATA")
public class Data {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int product_id;
	private String product_location;

	public Data() {
	}

	public Data(String product_location) {
		super();
		this.product_location = product_location;
	}

	public String getProduct_location() {
		return product_location;
	}

	public void setProduct_location(String product_location) {
		this.product_location = product_location;
	}
}
