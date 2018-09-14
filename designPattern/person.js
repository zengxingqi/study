class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
}

class Stutent extends Person {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    console.log(`${this.name} study, ${this.number}, ${this.age}`)
  }
}

export default Stutent
