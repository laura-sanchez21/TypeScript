//For each of these values, what type will the TypeScript compiler infer?

//number
let a = 100;

//string
let b = 'Coffee';

//boolean[]
let c = [true, false, false];

//object age: number
let d = {age: number};

//number[]
let e = [3];

//amy
let f;

//any[]
let g = [];

//What are the compilation errors in each of the following code snippets?
let song: {
title: string,
releaseYear: number
} = { title: 'My song' };
//missing releaseYear initialization
//= { title: 'My song'. releaseYear: 2025 };

let prices = [100, 200, 300];
prices[0] = '$100';
//prices is a number[], you are trying to pass a string into prices[0],
//instead pass in a number

function myFunc(a: number, b: number): number { }
//myFunc is supposed to return a number, there is nothing currently being returned in this function.
//number { return a + b; }