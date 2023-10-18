// Задача на классы и наследование: создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, такие как 
// прямоугольник, круг и треугольник. Реализуйте методы расчета площади 
// и периметра для каждой фигуры.

class Shape {
    calculateArea() {
    }

    calculatePerimeter() {
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }

    calculateArea() {
        return this._width * this._height;
    }

    calculatePerimeter() {
        return 2 * (this._width + this._height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this._radius = radius;
    }

    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this._radius;
    }
}

class Triangle extends Shape {
    constructor(basis, height, line1, line2) {
        super();
        this._basis = basis;
        this._height = height;
        this._line1 = line1;
        this._line2 = line2;
    }

    calculateArea() {
        return 0.5 * this._basis * this._height;
    }

    calculatePerimeter() {
        return this._basis + this._line1 + this._line2;
    }
}

const rectangle = new Rectangle(2, 4);
const circle = new Circle(8);
const triangle = new Triangle(15, 10, 13, 17);

console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());

console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());

console.log(triangle.calculateArea());
console.log(triangle.calculatePerimeter());
