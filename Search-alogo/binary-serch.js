function binarySearch(n) {
  const arr = [1, 2, 3, 4, 5, 6];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let mid = Math.floor(i + j / 2);
    if (arr[mid] === n) return mid;
    if (n < arr[mid]) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(3));
