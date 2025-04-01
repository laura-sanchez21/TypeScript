function kgToLbs(weight: number |  string): number {
    //Narrowing
    if(typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};

kgToLbs(19);
kgToLbs("100kg");
kgToLbs('10kg');