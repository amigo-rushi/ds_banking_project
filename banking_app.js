// Banking System

class Account {
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
      this.transactions = [];
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.transactions.push(`Deposited: $${amount}`);
        console.log(`Successfully deposited $${amount}. Current balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount");
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push(`Withdrew: $${amount}`);
        console.log(`Successfully withdrew $${amount}. Current balance: $${this.balance}`);
      } else {
        console.log("Invalid or insufficient funds for withdrawal");
      }
    }
  
    // Method to transfer money to another account
    transfer(amount, recipientAccount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        recipientAccount.balance += amount;
        this.transactions.push(`Transferred: $${amount} to Account ${recipientAccount.accountNumber}`);
        recipientAccount.transactions.push(`Received: $${amount} from Account ${this.accountNumber}`);
        console.log(`Successfully transferred $${amount} to Account ${recipientAccount.accountNumber}`);
      } else {
        console.log("Invalid or insufficient funds for transfer");
      }
    }
  
    // Method to check balance
    checkBalance() {
      console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
      return this.balance;
    }
  
    // Method to view transaction history
    viewTransactions() {
      console.log(`Transaction History for Account ${this.accountNumber}:`);
      this.transactions.forEach(transaction => console.log(transaction));
    }
  }
  
  // Banking system manager to handle multiple accounts
  class BankingSystem {
    constructor() {
      this.accounts = [];
    }
  
    // Method to create an account
    createAccount(accountHolder) {
      const accountNumber = this.accounts.length + 1;
      const newAccount = new Account(accountNumber, accountHolder);
      this.accounts.push(newAccount);
      console.log(`Account created for ${accountHolder}. Account Number: ${accountNumber}`);
      return newAccount;
    }
  
    // Method to find account by account number (uses linear search for simplicity)
    findAccount(accountNumber) {
      return this.accounts.find(account => account.accountNumber === accountNumber);
    }
  }
  
  // Example Usage
  const bank = new BankingSystem();
  
  // Creating accounts
  const account1 = bank.createAccount("Rushikesh");
  const account2 = bank.createAccount("Nilesh");
  
  // Performing operations
  account1.deposit(500);
  account1.withdraw(100);
  account1.transfer(200, account2);
  
  // Check balances
  account1.checkBalance();
  account2.checkBalance();
  
  // View transaction history
  account1.viewTransactions();
  account2.viewTransactions();
  