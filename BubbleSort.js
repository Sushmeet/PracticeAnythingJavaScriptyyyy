/**
 * Created by sushi on 09/03/16.
 */


function bubbleSort(arr) {
    var temp = 0;
    var outerForLoop = 0;
    var innerForLoop = 0;
    var isSorted = true;
    for (var k = 1; k < (arr.length) & isSorted; k++) {
         isSorted = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                isSorted = true;
            }
            innerForLoop++;
        }
        outerForLoop++;
    }
    console.log(arr);
    console.log('outerForLoop ' + outerForLoop);
    console.log('innerForLoop ' + innerForLoop);

}


list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
list2 = [2,9,5,4,8,1];
list3 = [1,2,3,4,5,6];

bubbleSort(list);
bubbleSort(list2);
bubbleSort(list3);


/* Output

 [-2, 1, 2, 2, 3, 3, 5, 6, 12, 14 ]
 outerForLoop 7
 innerForLoop 70
 [ 1, 2, 4, 5, 8, 9 ]
 outerForLoop 5
 innerForLoop 30
 [ 1, 2, 3, 4, 5, 6 ]
 outerForLoop 1
 innerForLoop 6

 */