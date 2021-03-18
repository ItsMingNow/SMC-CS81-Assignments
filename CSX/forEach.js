var forEach = (array, callback) => {
  for(let i = 0; i<array.length; i++){
    callback(array[i]);
  }
}

function map(array, callback){
const newArray = [];
forEach(array, n => newArray.push(callback(n)));
return newArray;
}

console.log(map([1,2,3,4,5,54], n => n-2)); // should log [-1 0 1 2 3 52]