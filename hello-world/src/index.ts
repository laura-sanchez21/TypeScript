//1, "Laura", known as a tuple
//This is a tuple that is similar to mapping
let user: [number, string][] = [[1, "Laura"]];
user[0].toString();
user[1].length;

//user.push(1); // not allowed as it needs to contain both a number and a string.
user.push([11, "London"]);

let user2: [number, string] = [1, "Laura"];
let user3: [number, string, boolean, number] = [1, "Laura", true, 15]; 