"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
class Person {
    name;
}
class Student extends Person {
    course;
    rollNumber;
}
class Teacher extends Person {
    course;
    timing;
}
class Course {
    classTeacher;
    students;
    timing;
}
const student1 = new Student();
student1.name = "owais";
student1.rollNumber = '1';
const student2 = new Student();
student2.name = "shoaib";
student2.rollNumber = '2';
const student3 = new Student();
student3.name = "mubashir";
student3.rollNumber = '3';
const teacher = new Teacher();
teacher.name = "sir Zia khan",
    teacher.course = "piaic",
    teacher.timing = "6-10";
const course = new Course();
course.classTeacher = teacher;
course.timing = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
const studentarray = [student1, student2, student3];
course.students = studentarray;
// console.log(course);
// console.log(Student);
// console.log(Person);
console.log(student1);
console.log(student2);
console.log(student3);
