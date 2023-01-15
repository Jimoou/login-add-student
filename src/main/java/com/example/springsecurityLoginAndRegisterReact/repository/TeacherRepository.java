package com.example.springsecurityLoginAndRegisterReact.repository;

import com.example.springsecurityLoginAndRegisterReact.model.Teacher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends CrudRepository<Teacher, Long> {
    Teacher findByEmail(String email);
}
