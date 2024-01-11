function binarySearch(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;

  if (target < arr[mid]) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}

let arr = [3, 4, 6, 7, 8];
console.log(binarySearch(arr, 4, 0, arr.length - 1));
