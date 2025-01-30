// complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // A square is a rectangle with equal width and height
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width; // Since all sides are equal in a square
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
