/**
 * Created by sushi on 13/02/16.
 */

// an objet with no properties
var emptyObject = { };

// a regular object with properties.
var chevy = {
    model: "1957",
    tires: 4,
    available: true,
    client: "sushi",
    printy: function() {
      console.log('Zoom Zoom');
    }
};


chevy.printy();

console.log(chevy.model);

chevy.model = "2012";

console.log(chevy.model);

console.log(chevy);

console.log(emptyObject)
emptyObject.id = 1236;
console.log(emptyObject)

