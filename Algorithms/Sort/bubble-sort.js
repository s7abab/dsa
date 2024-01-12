function bubbleSort(arr) {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [3, 1, 6, 4, 7, 100, 2];
console.log(arr);
bubbleSort(arr);
console.log(arr);
