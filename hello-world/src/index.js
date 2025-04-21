var Ride = /** @class */ (function () {
    function Ride() {
    }
    //constructor(public activeRides: number) {
    //}
    Ride.prototype.start = function () { Ride.activeRides++; };
    Ride.prototype.stop = function () { Ride.activeRides--; };
    Ride.activeRides = 0;
    return Ride;
}());
var ride1 = new Ride;
ride1.start();
var ride2 = new Ride();
ride2.start();
console.log("Ride1: " + Ride.activeRides);
console.log("Ride2: " + Ride.activeRides);
