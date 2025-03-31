type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

type ExtendedEmployee = Employee & {
    promote: () => void;
}

let employee: Employee = {
    id: 1,
    name: "Laura",
    retire: (date: Date) => {
        console.log(date);
    }
}

let extendedEmployee: ExtendedEmployee = {
    id: 1,
    name: "Laura",
    retire: (date: Date) => {
        console.log(date);
    },
    promote: () =>  {
        console.log("Employee promoted");
    }

}

// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {

//using object expansion to expand Employee
// const extendedEmployee = {
//     ...employee,
//     promoted: () => {
//         console.log("Employee has been promoted");
//     }
// }