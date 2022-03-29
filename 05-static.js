class Car {
  // Static Property
  static employee = "aditya";

  // Static Method
  static show() {
    console.log(`Hey my name is ${this.employee}`);
  }
}

// Call static method using classname.
Car.show();
