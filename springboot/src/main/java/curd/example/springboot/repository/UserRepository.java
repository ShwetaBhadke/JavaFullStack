package curd.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import curd.example.springboot.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {}