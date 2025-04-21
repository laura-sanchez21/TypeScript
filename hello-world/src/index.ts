class Person {
   constructor(
      public firstName: string, 
      public lastName: string) { }

      walk() { console.log("Walking"); }

      talk() { console.log("Talking"); }

      public get fullName() {
         return this.firstName + " " + this.lastName;
      }
}

// class Student extends Person {
//    constructor(
//       public studentId: number, 
//       firstName: string, 
//       lastName: string) {
//          super(firstName, lastName);
//       }

//    takeTest() { console.log("Taking a test!"); }
// }

class Teacher extends Person {

   constructor(firstName: string, lastName: string) {
      super(firstName, lastName);
   }

   //we do not need override as we are just adding "Professor"
   override get fullName() {
      return "Professor " + this.firstName + " " + this.lastName;
      //return "Professor " + super.fullName;
   }

   override walk() { console.log("Professor is Walking"); }
}

let teacher = new Teacher("John", "Doe");
console.log(teacher.fullName);
teacher.walk();