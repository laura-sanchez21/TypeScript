//as keyword has nothing to do with type conversionn
//let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById('phone');
//HTMLElement
//HTMLInputElement

phone.value
