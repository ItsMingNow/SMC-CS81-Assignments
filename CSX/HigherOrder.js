const companies = [
  {name: "Company One", category: "Fiance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Tech", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2003},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Tech", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 45, 25, 64, 32];

// forEach

companies.forEach((company)=> console.log(company.name)); // Prints name property in object in the array

companies.forEach((company)=> console.log(company.name, company.start, company.end)); // Prints name, start, end property in object in the array

// filter

const canDrink = ages.filter( age => age >= 21 ); // filters the ages array so that each element of ages is process by the function you pass in
console.log(`canDrink array - ${canDrink}`);

// Filter retail companies

const retailCompanies = companies.filter(company => company.category === "Retail"); //
console.log(`companies array after filter = ${companies}`)
console.log(`retail companies = ${retailCompanies}`)

retailCompanies.forEach(company => console.log("Retail Companies - " + company.name));

// Filter company that started in the 80s

const eightiesCom = companies.filter(company => company.start >= 1980 && company.start <= 1989);

eightiesCom.forEach(company => console.log("the 1980s " + company.name));

// Filter companies that lasted 10 years

const tenYearCompanies = companies.filter( company => (company.end - company.start) >= 10);
tenYearCompanies.forEach(company => console.log("10 ten companies " + company.name));

// map

// Create array of company names
const companyNames = companies.map(company => company.name);


// sort

// reduce