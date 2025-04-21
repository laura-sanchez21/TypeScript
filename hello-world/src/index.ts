class Person {
   constructor(
      public firstName: string, 
      public lastName: string) { }

      walk() { console.log("Walking"); }

      talk() { console.log("Talking"); }

      get fullName() {
         return this.firstName + " " + this.lastName;
      }
}

class Student extends Person {
   constructor(
      public studentId: number, 
      firstName: string, 
      lastName: string) {
         super(firstName, lastName);
      }

   takeTest() {
      console.log("Taking a test!");
   }
}

let student = new Student(123, "John", "Doe");
student.talk();
student.takeTest();