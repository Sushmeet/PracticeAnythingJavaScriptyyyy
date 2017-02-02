/**
 * Created by sushi on 01/02/17.
 */


"use strict";

/*
 5!
 5 *4!
 4 * 3!

 */


function factorial(n) {

    if (n == 1) {
        return 1;
    }

    else {
        return n * factorial(n - 1)
    }
}


console.log(factorial(5));




