///Original
function wrapInArray1(value: number) {
   return [value];
}

let numbers = wrapInArray1(1);

//Generic Type
function wrapInArray2<T>(value: T) {
   return [value];
}

let numbers2 = wrapInArray2(1);
let numbers3 = wrapInArray2('1');

class ArrayUtils {
   static wrapInArray3<T>(value: T) {
      return [value];
   }
}

// let utils = new ArrayUtils();
// let numbers4 = utils.wrapInArray3(5);

//Making the function static
let numbers4 = ArrayUtils.wrapInArray3(5);