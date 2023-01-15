package com.example.springsecurityLoginAndRegisterReact.service;

import com.example.springsecurityLoginAndRegisterReact.model.Student;

import java.util.List;

public interface StudentServiceInterface {
    public String addStudent(Student student);
    public List<Student> getAllStudents();
}
