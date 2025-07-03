package org.example;

public class Student {
    public Student(){
        System.out.println("Student constructor");
        return;
    }
    public static void SpringIntern(){
        System.out.println("Spring Intern");
        Student st;
        st = new Student();
        SpringIntern();
        return;
    }
}
