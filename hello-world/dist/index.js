"use strict";
//missing :numner as it is only needed for the compiler, to type-chaeck
function kgToLbs(weight) {
    if (typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
;
kgToLbs(19);
kgToLbs("100kg");
kgToLbs('10kg');
//# sourceMappingURL=index.js.map