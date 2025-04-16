// Given the data below, define a type alias for representing users.
// let users = [
//     {
//         name: 'John Smith',
//         age: 30,
//         occupation: 'Software engineer'
//     },
//     {
//         name: 'Kate Müller',
//         age: 28
//     }
// ];

type User = {
    name: string;
    age: number;
    occupation?: string;
}

//Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Bird = {
    type: "bird";
    fly: () => void;
}

type Fish = {
    type: "fish";
    swim: () => void;
}

type Pet = Bird | Fish;

//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,
//etc
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

//Simplify the following code snippets:
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo : bar()
let x = foo ?? bar()

//What is the problem in this piece of code?
let value: unknown = 'a';
if (typeof value === 'string')
    console.log(value.toUpperCase());

//when a type is unkown you have to check the type to use functionn calls like toUpperCase
//as it is only related to strings