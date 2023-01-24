console.clear()

class Person{
    name?:string;
}

class Student extends Person{
course?: string;
rollNumber?: string;
}

class Teacher extends Person{
    course?:string;
    timing?:string;
}
class Course{
    classTeacher?:Teacher;
    students?:Student[];
    timing?:string;
}

const student1:Student = new Student();
student1.name="owais"
student1.rollNumber='1'

const student2:Student = new Student();
student2.name="shoaib"
student2.rollNumber= '2'


const student3:Student = new Student();
student3.name="mubashir"
student3.rollNumber='3'

const teacher:Teacher = new Teacher();
teacher.name= "sir Zia khan",
teacher.course= "piaic",
teacher.timing= "6-10"


const course:Course = new Course();

course.classTeacher=teacher;

course.timing=teacher.timing;

student1.course=teacher.course
student2.course=teacher.course
student3.course=teacher.course

const studentarray:Student[]=[student1,student2,student3]
course.students = studentarray;

// console.log(course);
// console.log(Student);
// console.log(Person);

// console.log(student1);
// console.log(student2);
// console.log(student3);
