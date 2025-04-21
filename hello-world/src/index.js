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
// class Student extends Person {
//    constructor(
//       public studentId: number, 
//       firstName: string, 
//       lastName: string) {
//          super(firstName, lastName);
//       }
//    takeTest() { console.log("Taking a test!"); }
// }
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    Object.defineProperty(Teacher.prototype, "fullName", {
        //we do not need override as we are just adding "Professor"
        get: function () {
            return "Professor " + this.firstName + " " + this.lastName;
            //return "Professor " + super.fullName;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.walk = function () { console.log("Professor is Walking"); };
    return Teacher;
}(Person));
var teacher = new Teacher("John", "Doe");
console.log(teacher.fullName);
teacher.walk();
