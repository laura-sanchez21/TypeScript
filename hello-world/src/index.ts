function echo<T>(value: T): T {
   return value;
}

echo("hello");
echo(1);

//Limit the type of object that we can pass to string and number
function echo2<T extends number | string>(value: T): T {
   return value;
}

//echo2(true); expecting number or string
echo2(1);
echo2("hello");

//Limit by the shape of the object
function echo3<T extends {name: string}>(value: T): T {
   return value;
}
echo3({name: "Laura"})

type Person = {
   name: string
}

let temp: Person = {
   name: "hello"
}

function echo4<T extends Person>(value: T): T {
   return value;
}

echo4(temp);

interface Person1 {
   name: string;
}
const person: Person1 = {
   name: "Laura"
}

function echo5<T extends Person1>(value: T): T {
   return value;
}

class Person2 {
   constructor( public name: string) {
   }
}

class Customer extends Person2 {

}

function echo6<T extends Person2>(value: T) {
   return value;
}

echo(new Customer('a'));