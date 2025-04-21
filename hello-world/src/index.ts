class Ride {
   private static _activeRides: number = 0;
   //constructor(public activeRides: number) {
   //}
   start() { Ride._activeRides++; }
 
   stop() { Ride._activeRides--; }

   static get activeRides(): number {
      return Ride._activeRides;
   }
}

//Ride.activeRides = 10; // Error: activeRides is private

let ride1 = new Ride;
ride1.start();

let ride2 = new Ride();
ride2.start()

console.log(Ride.activeRides);