function occurance(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj
}

console.log(occurance("hello how are you"));
