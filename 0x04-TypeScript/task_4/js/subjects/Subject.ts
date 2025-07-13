export namespace Subjects {
  export class Teacher {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
