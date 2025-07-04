package com.example.SpringBootApp.Controller;

import Models.Employee;
import com.example.SpringBootApp.Service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HelloWorldController {

    @Autowired
    private HelloWorldService sss;

    @GetMapping("/get")
    public List<Employee> getmethod() {
        return sss.get();
    }

    @PostMapping("/post")
    public String postmethod() {
        return sss.postmethod();
    }

    @PutMapping("/put")
    public String putmethod() {
        return sss.putmethod();
    }

    @DeleteMapping("/delete")
    public String deletemethod() {
        return sss.deletemethod();
    }
}