// Create 'Car' class
class Car {
  // Constructor which takes 3 arguments
  constructor(name, price, color) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
}

class Cars {
  static arr = [
    new Car("Tesla Model 3", "65L", "Black"),
    new Car("Audi A5", "55L", "red"),
    new Car("Nissan GTR", "200L", "White"),
  ];

  static showAllCars() {
    // Use for-of loop to iterate over the array
    for (let car of this.arr) {
      console.log(`
          Name: ${car.name}
          Price: ${car.price}
          Color: ${car.color}
      `);
    }
  }
}

const c1 = new Cars();
c1.showAllCars();
