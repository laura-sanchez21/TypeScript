class Account {
    nickname?: string;

    constructor (
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    deposit(amount: number): void {
        //this.id = 0;
        if(amount <= 0)
            throw new Error("Invalid amount!");
        //Record a transaction
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }

    private calculateTax(): void {

    }
}

let account = new Account(1, "Laura", 0);
//account.id = 0; error: id is readonly
//account.balance -= 1; error: balance is private
console.log(account.getBalance);

account.deposit(100);
//console.log("Account balance: " + account.balance);
console.log(account);
console.log("Typeof " + typeof account)
console.log("Instance of Account: " +(account instanceof Account));

//union
//if (typeof someObj === 'number')