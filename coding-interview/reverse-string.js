const str = "HelloWorld";
const strArr = str.split('')
let start = 0;
let end = str.length - 1;

while (start < end) {
  [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
  start++;
  end--;
}

console.log(strArr.join(''));
