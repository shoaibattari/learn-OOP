"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
class Person {
    name;
}
<<<<<<< HEAD
const cultus = new Car('red', "1000cc", 1000);
const civic = new Car('blur', "1100cc", 1500);
const Alto = new Car('green', "1200cc", 2000);
Alto.license = 'al2026';
civic.license = 'cv2026';
cultus.license = 'cl2026';
console.log(cultus.displayAll(), Alto._license);
console.log(civic.displayAll(), civic._license);
console.log(Alto.displayAll(), Alto._license);
console.log(Alto._license);
console.log(civic._license);
console.log(cultus._license);
console.log(Alto.license);
=======
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
>>>>>>> 1b01b31024b211fcebf1066c9b8d948e8b7b20a3
