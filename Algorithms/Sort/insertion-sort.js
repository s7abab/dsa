function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < insert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = insert;
  }
}

const arr = [3, 1, 66, 14, 3553];
insertionSort(arr);
console.log(arr);
