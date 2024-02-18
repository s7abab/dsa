const arr = [1, 1, 42, 10, 3, 4, 4, 1, 2, 2];
const newArr = [];
function removeDuplicate(arr) {
  const obj = {};

  for (let item of arr) {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
  }

  for (let i in obj) {
    if (obj[i] <= 1) {
      newArr.push(i);
    }
  }
}

removeDuplicate(arr);
console.log(newArr);
