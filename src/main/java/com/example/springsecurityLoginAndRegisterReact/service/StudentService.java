package com.example.springsecurityLoginAndRegisterReact.service;

import com.example.springsecurityLoginAndRegisterReact.model.Student;
import com.example.springsecurityLoginAndRegisterReact.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements StudentServiceInterface{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public String addStudent(Student student) {
        studentRepository.save(student);
        return "Successful";
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll(Sort.by(Sort.Direction.DESC, "Id"));
    }
}
