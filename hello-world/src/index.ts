class KeyValuePairs<T, U> {
   constructor(public key: T, public value: U) {

   }
}

let pair = new KeyValuePairs(6, "hello");
pair.key.toPrecision();

let pair2 = new KeyValuePairs<string, string>("temp", "three");
pair2.key.charAt(0);