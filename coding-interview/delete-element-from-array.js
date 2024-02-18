function deleteElement(arr, index) {
  for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;

  return arr;
}

const arr = [1, 2, 3, 10, 20, 30];
console.log(deleteElement(arr, 2));
