/**
 * Created by sushi on 14/02/16.
 */

//Javascripts version of a class
// this function can be used like
// a class.
function Fruit(fruitType) {
    this.fruitType = fruitType,
    this.color = "red",
    this.size= 13,
    this.printy = function() {
        console.log(this.fruitType + ' ' + this.size);
    }
};

Fruit.prototype.printy2 = function () {
    console.log(this.fruitType + ' ' + this.size);
}

// declare two objects apple and banana of type Fruit
var apple = new Fruit('apple');
var banana = new Fruit('banana');

// reassign size values for apple and banana
apple.size = 29;
banana.size = 30;

apple.printy();
banana.printy();

apple.printy2();
banana.printy2();


//console.log(apple.fruitType + ' ' + apple.size);
//console.log(banana.fruitType + ' ' + banana.size);