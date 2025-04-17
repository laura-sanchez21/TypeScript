class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string;

    constructor (id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        //this.id = 0;
        if(amount <= 0)
            throw new Error("Invalid amount!");
        this.balance += amount;
    }
}

let account = new Account(1, "Laura", 0);
//account.id = 0;

account.deposit(100);
console.log("Account balance: " + account.balance);
console.log(account);
console.log("Typeof " + typeof account)
console.log("Instance of Account: " +(account instanceof Account));

//union
//if (typeof someObj === 'number')