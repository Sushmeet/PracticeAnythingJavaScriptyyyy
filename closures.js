// Closures
/*
a function  that returns a function
 */

function wrapValue(n) {
    var localVariable = n;
    return function() {
        return localVariable;
    }
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

console.log(wrapValue(4)());


function hmm(number) {
    return function(num) {
       return number * num ;
    }
}

var hmm1 = hmm(2);
var aha = hmm1(5);

console.log(aha);
console.log(hmm1(5));