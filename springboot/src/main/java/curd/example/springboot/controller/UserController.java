package curd.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import curd.example.springboot.entity.Data;
import curd.example.springboot.entity.User;
import curd.example.springboot.service.UserService;

@RestController
public class UserController {

	@Autowired
	public UserService service;
	
	@PostMapping("/addUserData")
	public void add(@RequestBody User user) {
		service.AddUserData(user);
	}

	@PostMapping("/addAllUsers")
	public List<User> addAllUsers(@RequestBody List<User> user) {
		return service.AddListUserData(user);

	}

	@GetMapping("/getAllUser")
	public List<User> getAllUser() {
		return service.getAllUserData();
	}

	@DeleteMapping("/deleteData/{userId}")
	private void deleteUser(@PathVariable("userId") int Userid) {
		service.deleteUserData(Userid);
	}
	
}
