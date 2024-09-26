const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius * this.radius
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius
  },
}

const circle2 = {
  radius: 3,
  getArea() {
    return Math.PI * this.radius * this.radius
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius
  },
}
console.log(circle1.getArea())
console.log(circle1.getPerimeter())

console.log(circle2.getArea())
console.log(circle2.getPerimeter())
