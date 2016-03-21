/**
 * Created by sushi on 19/01/16.
 */

// print numbers from 1 to 1000

var buzzy = function () {

    var outputString = '';
    for(i = 1; i <= 100; i++) {

        if ((i % 3) == 0)
        {
            outputString += 'Fizz'
        }
        else if ((i % 5) == 0)
        {
            outputString += 'Buzz'
        }
        else
        {
            outputString += i;
        }

        outputString += '\n'
    }


    console.log(outputString );
}


buzzy();