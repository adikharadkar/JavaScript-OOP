class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  // Method to calculate area of rectangle
  area() {
    return this.length * this.breadth;
  }

  // Method to calculate perimeter of rectangle
  perimeter() {
    return 2 * (this.length + this.breadth);
  }

  sayHi() {
    console.log("Hi I am a rectangle!");
  }
}

class Circle {
  // Method which takes arguments
  circumference(radius, pi = 3.14) {
    return 2 * pi * radius;
  }
}

// Create an instance of class Circle
const c1 = new Circle();

// Print the output of circumference() method
console.log(c1.circumference(4));

// Create an instance of class Rectangle
const r1 = new Rectangle(20, 10);

// Calculate the area
console.log(r1.area());

// Calculate the perimeter
console.log(r1.perimeter());
r1.sayHi();

// Print the instance of Rectangle class
console.log(r1);
