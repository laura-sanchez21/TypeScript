function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while(true){
        //Read a message from a queue
    }
}

reject('...');
//processEvents();
console.log("Hello World");