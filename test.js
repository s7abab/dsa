const arr = [3, 3, 1132, 41, 212, 412];

// function bubbleSort(arr) {
//   let swapped = true;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// bubbleSort(arr);
// console.log(arr);

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1;
//     let insertNumber = arr[i];
//     while (j >= 0 && arr[j] > insertNumber) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = insertNumber;
//   }
// }

// insertionSort(arr);
// console.log(arr);

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(arr));


