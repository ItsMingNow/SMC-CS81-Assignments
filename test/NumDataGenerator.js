
// Create Sample Data
const dataArry = [];
let dataSize = 50;

for(let i = 0; i<dataSize; i++){
  dataArry.push(Math.round(Math.random() * 100))
}

console.log(`Sample date set - ${dataArry}`);

// Sort data smallest to largest

console.log(`Sort method Ascending - ${dataArry.sort((a,b) => a - b)}`);

// Sort data largeted to smallest

console.log(`Sort method Descending- ${dataArry.sort((a,b) => b - a)}`);

// Find minimum

console.log(`minimum value in data set - ${Math.min(...dataArry)}`);

// Find maximum

console.log(`maximum value in data set - ${Math.max(...dataArry)}`);