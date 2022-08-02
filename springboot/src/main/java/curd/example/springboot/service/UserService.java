package curd.example.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import curd.example.springboot.entity.Data;
import curd.example.springboot.entity.User;
import curd.example.springboot.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	public UserRepository repository;
	
	public void AddUserData(User data) {
		repository.save(data);
	}
	public List<User> AddListUserData(List<User> data) {
		return repository.saveAll(data);
	}
	
	public List<User> getAllUserData(){
		return repository.findAll();
	}
	public void deleteUserData(int id)   
	{  
	repository.deleteById(id);  
	} 
}
