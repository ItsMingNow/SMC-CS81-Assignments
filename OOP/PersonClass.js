class Person {
  constructor(firstName, LastName, dob){
    this.firstName = firstName;
    this.LastName = LastName;
    this.dob = new Date(dob) //dd-mm-yyyy
  }

  getName() {
    return `${this.firstName} ${this.LastName}`;
  }
}

