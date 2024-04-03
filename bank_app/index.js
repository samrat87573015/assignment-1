class BankAccount{

    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance+= amount;
        console.log(`${amount} deposit from Account Number ${this.accountNumber}.`);
    }
    withdraw(amount){
        if(this.balance <= amount){
            console.log("Insufficient funds");
            
        }else {
            this.balance-= amount;
            console.log(`${amount} withdrawn from Account Number ${this.accountNumber}.`);
        }
        
    }
    getBalance(){
       return this.balance;
    }


    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}` );
        console.log(`Owner Name: ${this.ownerName}` );
        console.log(`Balance: $${this.balance}` );
    }
}

const account1 = new BankAccount(1001, "John Doe", 1000);

console.log(`Account ${account1.accountNumber} Information`)
account1.displayAccountInfo();

account1.deposit(500);
account1.withdraw(800);
console.log(`New Balance: $${account1.getBalance()}`);

console.log("\n");

const account2 = new BankAccount(1002, "Hasibur rahman", 1500);

console.log(`Account ${account2.accountNumber} Information`)
account2.displayAccountInfo();

account2.deposit(500);
account2.withdraw(900);
console.log(`New Balance: $${account2.getBalance()}`);
