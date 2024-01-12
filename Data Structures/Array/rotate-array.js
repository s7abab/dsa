// reverse array
const arr =[1,2,3,4,5];

function rotate (arr, rotate){
  let i=0;
  let j= rotate-1

  while(i!=j){
    let temp
    
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
    i = i+1
  }
  return arr
}

console.log(rotate(arr,4));
