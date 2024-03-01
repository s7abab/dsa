const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

function sum (arr){
  return arr.reduce((acc, curr)=>{
    return acc+(Array.isArray(curr) ? sum(curr) : curr)
  },0)
}

console.log(sum(nestedArray));
