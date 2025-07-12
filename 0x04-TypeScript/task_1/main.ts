interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  age: number;
  location: string;
  contract: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction { 
  (firstName: string, lastName: string): string;
}

const teacher3: Teacher = {
  firstName: "Eleanya",
  fullTimeEmployee: false,
  lastName: "Onuma",
  age: 25,
  location: "Nigeria",
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: "John",
  fullTimeEmployee: true,
  lastName: "Doe",
  age: 40,
  location: "USA",
  contract: true,
  numberOfReports: 17,
}

function printTeacher(firstName: string, lastName: string): string { 
  return `${firstName.charAt(0)} ${lastName}`;
}
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
console.log(printTeacher(director1.firstName, director1.lastName));


class StudentClass {
  firstName: string;
  lastName: string;
  workOnHomeWork: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.workOnHomeWork = "Currently working";
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

const student1 = new StudentClass("Jane", "Doe");
console.log(student1.displayName());