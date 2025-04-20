class SeatAssignment {
   //index signature properties
   //using a number
   //[seatNumber: number]: string;
   [seatNumber: string]: string;
}

//let seats = new  SeatAssignment();
//initializing 1 with 'm'
//seats[1] = "m"

let seats = new SeatAssignment();
seats.A1 = "Mosh";
//seats['A1'] = "Mosh"; identical to the above line
seats.A2 = "John";
seats.A2 = 1; 