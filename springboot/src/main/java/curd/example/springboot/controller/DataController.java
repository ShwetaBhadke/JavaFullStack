package curd.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import curd.example.springboot.entity.Data;
import curd.example.springboot.service.DataService;

@RestController
public class DataController {

	@Autowired
	public DataService service;

	@PostMapping("/addProductData")
	public void add(@RequestBody Data data) {
		service.AddProductData(data);
	}

	@PostMapping("/addAllProducts")
	public List<Data> addAllProducts(@RequestBody List<Data> data) {
		return service.AddListProductData(data);

	}

	@GetMapping("/getAllData")
	public List<Data> getAllData() {
		return service.getAllProductData();
	}

	@DeleteMapping("/deleteData/{product_id}")
	private void deleteBook(@PathVariable("product_id") int productid) {
		service.deleteProductData(productid);
	}
}
