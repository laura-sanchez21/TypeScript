//? makes taxYear an optional argument, you dont need to pass in taxYear when calling calculateTax()
//function calculateTax(income: number, taxYear?: number): number{
function calculateTax(income: number, taxYear: number = 2022): number {
    // let x; warning is emitted as x it is not used
    //if (income < 50_000)
    //if(taxYear < 2022) //taxYear will complain because of the ? to solve this do the following
    //if((taxYear || 2022) < 2022) //this is one approach the second is to define taxYear in the function
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

//calculateTax(10_000, 2022, 1);
calculateTax(10_000, 2022);