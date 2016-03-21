/**
 * Created by sushi on 13/02/16.
 */

/* We want to write a program that prints two numbers,
   the numbers of cows and chickens on a farm, with the words Cows and Chickens
   after them, and zeros padded before both numbers so that they are always
   three digits long.
   eg 007 Cows
   011 Chickens
*/




function barnyard(cows, chickens) {
    var cowString = String(cows);
    var chickenString = String(chickens);

    while (cowString.length < 3) {
        cowString =  '0' + cowString
    }

    while (chickenString.length < 3) {
        chickenString = '0' + chickenString;
    }

    console.log(cowString + ' Cows');
    console.log(chickenString + ' Chicken');
}


barnyard(7, 11);

