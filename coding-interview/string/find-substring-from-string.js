const str = "hey how are you";

function checkString(input) {
  for (let i = 0; i < str.length - input.length; i++) {
    if (str.substring(i, i + input.length) === input) {
      return true;
    }
  }
  return false;
}

console.log(checkString("are"));
