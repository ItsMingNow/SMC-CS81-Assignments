// Memoization
//  js object, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
};



console.log(fib(6)); //8

// Grid Traveler

const gridTraveler = (m,n) => {



};

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));