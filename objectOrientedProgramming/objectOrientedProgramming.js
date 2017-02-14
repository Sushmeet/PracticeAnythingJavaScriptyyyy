/**
 * Created by sushi on 01/02/17.
 */

'use strict';

// constructor function.
function Checking(amount) {
    this.balance = amount;

    this.deposit = function (amount) {
        this.balance = this.balance + amount
    };

    this.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        }
        else if (amount > this.balance) {

            console.log("insufficient funds")
        }
    };

    this.toString = function () {
        console.log("Balance is " + this.balance + " dollars");
    };
}


var checkingacct = new Checking(10);
checkingacct.toString();

checkingacct.deposit(5);
checkingacct.toString();

checkingacct.withdraw(200);
checkingacct.toString();

checkingacct.withdraw(5);
checkingacct.toString();

