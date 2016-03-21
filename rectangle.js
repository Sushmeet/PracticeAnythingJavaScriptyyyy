/**
 * Created by sushi on 20/03/16.
 */


var rect = require('./rect');


function solveRect(a,b) {
    if (a < 0 || b < 0) {
        console.log('Length or breadth is less then 0');
        return 0;
    }

    else {
       return  rect.area(a,b);
    }
}


console.log(solveRect(4,6));