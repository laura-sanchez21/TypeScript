let speed: number | null = null;
//let ride: Ride
let ride = {
    //javascript
    //speed: speed | 30
    //falsy values in javascript: undefined, null, '', false, 0
    //what if we want to set the speed to 0
    //speed: speed !== null ? speed : 30

    //Nullish coalescing operator
    speed: speed ?? 30 
}