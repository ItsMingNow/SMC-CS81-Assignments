function makePerson(name, age) {
	let newObj = {};
	newObj.name = name;
	newObj.age = age;

  return newObj;
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24