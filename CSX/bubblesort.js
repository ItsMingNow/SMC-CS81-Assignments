let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (inputArr[j] > inputArr[j + 1]) {
              let tmp = inputArr[j];
              inputArr[j] = inputArr[j + 1];
              inputArr[j + 1] = tmp;
          }
      }
  }
  return inputArr;
};

const numArray = [5,4,34,7,54,3,4,6,4,78,87,34,23,5,35];

console.log(bubbleSort(numArray));