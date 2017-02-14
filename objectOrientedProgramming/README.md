# Object Oriented Programming

> Objects can be defined using a constructor function.Objects are
 created by defining a constructor function that includes
  declarations for an object’s properties and functions,
  followed by definitions for the functions. Here is the
  constructor function for a checking account object:

```
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
```