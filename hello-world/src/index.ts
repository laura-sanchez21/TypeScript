class Person {
   constructor(
      public firstName: string, 
      public lastName: string) { }

      private walk() { console.log("Walking"); }

      protected talk() { console.log("Talking"); }

      public get fullName() {
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
   
      override talk() {
         console.log("Student is talking")
      }

   takeTest() { 
      this.talk();
      console.log("Taking a test!"); 
   }
}

//base class wont allow for the object to use talk as it is protected
// let person = new Person("tom", "riddle");
// person.talk()

//child class allows for talk to be called as it is considered public in
//the student class
// let student = new Student(123, "tomm", "tom");
// student.talk();

class Teacher extends Person {
   override get fullName() {
      return "Professor " + this.firstName + " " + this.lastName;
   }
}

class Principal extends Person {
   override get fullName() {
      return "Principal " + this.firstName + " " + this.lastName;
   }
}

printName([
   new Student(123, "John", "doe"),
   new Teacher("foo", "doo"),
   new Principal("Tom", "Soe")
])

function printName(people: Person[]) {
   for ( let person of people) {
      console.log(person.fullName);
      
   }
}