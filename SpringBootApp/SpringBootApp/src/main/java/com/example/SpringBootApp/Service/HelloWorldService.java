package com.example.SpringBootApp.Service;

import Models.Employee;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class HelloWorldService {
    List<Employee> emp = new ArrayList<>(Arrays.asList(
            new Employee(1, "Arun", "Officer", 50000),
            new Employee(2, "Sabeel", "Family_Man", 10000000)
    ));

    public List<Employee> get() {
        return emp;
    }

    public String postmethod() {
        return "This is the PostMethod!....";
    }

    public String putmethod() {
        return "This is the PutMethod!....";
    }

    public String deletemethod() {
        return "This is the DeleteMethod!....";
    }
}