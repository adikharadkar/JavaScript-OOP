class Friends {
  name;
  age;

  // Constructor Method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Create & Initialize Object 1
const f1 = new Friends("Joey", 29);

// Create & Initialize Object 2
const f2 = new Friends("Changler", 28);

// Print Class "Friends"
console.log(Friends);

// Print Objects f1 & f2
console.log(f1);
console.log(f2);
