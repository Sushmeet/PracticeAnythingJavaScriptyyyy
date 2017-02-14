/**
 * Created by sushi on 01/02/17.
 */

'use strict';

// constructor function.
function Checking(amount) {
    this.balance = amount;

    this.deposit = function (amount) {
        this.balance += this.balance + amount
    };

    this.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        }
        else  {

        }
    };

    this.toString = function () {
        console.log ("Balance is" + this.balance );
    };
}