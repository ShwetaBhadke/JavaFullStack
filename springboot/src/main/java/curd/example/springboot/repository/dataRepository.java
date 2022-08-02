package curd.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import curd.example.springboot.entity.Data;

public interface dataRepository extends JpaRepository<Data, Integer> {}