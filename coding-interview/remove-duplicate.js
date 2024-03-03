const arr = [1, 2, 1, 1, 45, 134, 5];
const count = {};

for (let item of arr) {
  count[item] = (count[item] || 0) + 1;
}

const newArr = [];
for (let i in count) {
  if (count[i] === 1) {
    newArr.push(Number(i));
  }
}

console.log(newArr);
