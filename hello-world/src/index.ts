//function render(document: any) {
function render(document: unknown) {
    //Norrowing
    // if(typeof document === 'string') {
    //     document.toUpperCase();
    // }

    //used for custom objects
    if (document instanceof WordDocument) {
        document.toUpperCase();
    }
    
    document.move();
    document.fly();
}