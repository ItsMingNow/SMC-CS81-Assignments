// var subtractTwo = (num) => {
//   return num-2;
// }

function subtractTwo(num) {
  return num-2;
}

function map(arry, callback){
  const newArry = [];
  for(let i = 0; i<arry.length; i++){
    newArry.push(callback(arry[i]));
  }

  return newArry;
}

console.log(map([1,2,3,4], subtractTwo));