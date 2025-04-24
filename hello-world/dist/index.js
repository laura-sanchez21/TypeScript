"use strict";
class Person {
    constructor(name, salary, address) {
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
}
let person = new Person("foo doo", 50000, { street: "foo st", city: "doo town", zipCode: 123 });
console.log(person.address);
//# sourceMappingURL=index.js.map