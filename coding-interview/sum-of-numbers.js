const arr = [1, "a", 10, "sdf", 9];

function sum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
    }
  });
  return sum;
}

console.log(sum(arr));
