package curd.example.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import curd.example.springboot.entity.Data;
import curd.example.springboot.repository.dataRepository;

@Service
public class DataService {

	@Autowired
	public dataRepository repository;
	
	public void AddProductData(Data data) {
		repository.save(data);
	}
	public List<Data> AddListProductData(List<Data> data) {
		return repository.saveAll(data);
	}
	
	public List<Data> getAllProductData(){
		return repository.findAll();
	}
	public void deleteProductData(int id)   
	{  
	repository.deleteById(id);  
	} 
}
