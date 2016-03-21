/**
 * Created by sushi on 14/02/16.
 */

var taxi = {
    make: "Webville Motors",
    model: "taxi",
    year: 1955,
    mileage: 90000
};


function prequal (car) {
    if (car.mileage > 10000) {
        return false;
    }
    else if (car.year > 1960) {
        return false;
    }
    else {
        return true;
    }
}

var worthAlook = prequal(taxi);

if (worthAlook) {
    console.log('Taxi is definetly worth a look')
}
else {
    console.log('its not worth the salt in ur shoes.')
}
