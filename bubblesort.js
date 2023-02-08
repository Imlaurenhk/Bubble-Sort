x = [8, 6, 2, 4, 1, 0, 3, 5, 9];

function bubbleSort(unsortedArray){
    for (i = 0; i < unsortedArray.length -1; i++){
        for (x = 0; x < unsortedArray.length - i + 1; x++){
            if (unsortedArray[x + 1] < unsortedArray[x]){
                let temp = unsortedArray[x + 1];
                unsortedArray[x + 1] = unsortedArray[x];
                unsortedArray[x] = temp;
            }
        }
    }
    console.log(unsortedArray);
}
bubbleSort(x);