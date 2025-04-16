// //Part 1
// type Employee = {
//     hame: string;
//     age: number;
//     department ?: string;
//     isActive : boolean;
// }

// //Part 2
// type Car = {
//     wheels: number;
//     drive(): void;
// }

// type Bike = {
//     wheels: number;
//     pedal(): void;
// }

// type Vehicle = Car | Bike;

// //Part 3
// let user = {
//     profile: {
//         address: {
//             city: "Berlin"
//         }
//     }
// };
// console.log(user?.profile?.address?.city);

// //part 4
// // let name: string | null = null;
// // let displayName = name ?? "Guest";

// //Part 5
// let score = 42;        // number
// let title = "Quiz!";   // string
// let flags = [true];    // boolean[]
// let empty = [];        // any[]

// //Part 6
// let movie: {
//     title: string,
//     duration: number
//   } = {
//     title: "Epic Movie"
//   };

//   //Need to initialize duration

//   //Part 7
//   let input: unknown = "typescript";

//   if (typeof input ===  'string')
//         console.log(input.toUpperCase());

type Car = {
    type: "car";
    wheels: 4;
    drive(): void;
}

type Bike = {
    type: "bike";
    wheels: 2;
    pedal(): void;
}

type Vehicle = Car | Bike;

// Your answer:
function handleVehicle(vehicle: Vehicle): void {
    switch(vehicle.type) {
        case 'bike':
            vehicle.pedal();
            break;
        case 'car':
            vehicle.drive();
            break;
        default:
            break;
    }
    console.log("Using a vehicle with X wheels " + vehicle.wheels );
}