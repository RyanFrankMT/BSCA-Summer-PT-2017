function Account(balance, type){
  this.balance = balance;
  this.debits = 0;
  this.credits = 0;
  this.type = type;

  var self = this;
  this.deposit = function deposit(amount){
    self.balance += amount;
    self.credits += amount;
    console.log("deposited:",amount,"to",self.type,"account balance is now:",self.balance);
  }
  this.withdraw = function withdraw(amount){
    self.balance -= amount;
    self.debits -= amount;
    console.log("withdrew:",amount,"from",self.type,"account balance is now:",self.balance)
  }
  this.statement =  function statement(){
    console.log(self.type,"account balance is:",self.balance,"with",self.debits,"in debits and",self.credits,"in credits");
  }
}

var testAccount = new Account(5000);
//console.log(testAccount);
// testAccount.deposit(1500);
// testAccount.withdraw(300);
// testAccount.statement();

function Customer(initChecking,initSavings){
  this.checking = new Account(initChecking,"Checking");
  this.savings = new Account(initSavings,"Savings");

  var self = this;
  this.accountOverview = function accountOverview(){
    self.checking.statement();
    self.savings.statement();
  }
}



var testCustomer = new Customer(5000,2500);
//console.log(testCustomer);

testCustomer.checking.deposit(1000);
testCustomer.checking.withdraw(300);
testCustomer.savings.deposit(2000);
testCustomer.accountOverview();





// EXERCISE 2  ES6 syntax vs. ES5 syntax
// Both ES6 and ES5 are functionally equivalent
// ES6 is nice because it is cleaner and makes it more clear that it is a constructor function (purpose is more transparent)
// Use ES6 from now on
class Bank{
  constructor(totalFunds, numAccounts, accounts){
    this.totalFunds = totalFunds
    this.numAccounts = accounts
    this.accounts = accounts
  }
  getFunds(){
    return this.totalFunds
  }
  setFunds(funds){
    this.totalFunds = funds
  }
}

function BankES5(totalFunds, numAccounts, accounts){
  this.totalFunds = totalFunds
  this.numAccounts = numAccounts
  this.accounts = accounts

  function getFunds(){
    return this.totalFunds
  }
}
