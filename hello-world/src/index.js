var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.walk = function () { console.log("Walking"); };
    Person.prototype.talk = function () { console.log("Talking"); };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.talk = function () {
        console.log("Student is talking");
    };
    Student.prototype.takeTest = function () {
        this.talk();
        console.log("Taking a test!");
    };
    return Student;
}(Person));
var student = new Student(123, "tom", "riddle");
student.talk();
// class Teacher extends Person {
//    override get fullName() {
//       return "Professor " + this.firstName + " " + this.lastName;
//    }
// }
// class Principal extends Person {
//    override get fullName() {
//       return "Principal " + this.firstName + " " + this.lastName;
//    }
// }
// printName([
//    new Student(123, "John", "doe"),
//    new Teacher("foo", "doo"),
//    new Principal("Tom", "Soe")
// ])
// function printName(people: Person[]) {
//    for ( let person of people) {
//       console.log(person.fullName);
//    }
// }
