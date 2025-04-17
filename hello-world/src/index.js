var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this.balance += amount;
    };
    return Account;
}());
var account = new Account(1, "Laura", 0);
account.deposit(100);
console.log("Account balance: " + account.balance);
console.log(account);
console.log("Typeof " + typeof account);
console.log("Instance of Account: " + (account instanceof Account));
//union
//if (typeof someObj === 'number')
