/**
 * Created by sushi on 01/02/17.
 */

"use strict";

var globalVariable = 'Global Variable'; // global scope


function showMeGlobal() {
    return globalVariable;
}

function showMeLocal() {
   var globalVariable = "Local Variable"; // local scope
    return globalVariable;
}

console.log(showMeGlobal());
console.log(showMeLocal());

console.log(globalVariable);