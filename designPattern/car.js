class Car {
  constructor(number, name) {
    this.name = name
    this.number = number
  }
}
class KuaiChe extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 1
  }
}
class ZhuanChe extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 2
  }
}
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，车牌号：${this.car.number}，车型号：${this.car.name}`)
  }
  end() {
    console.log(`行程结束，结算金额：${this.car.price * 5}`)
  }
}
export default {
  Trip,
  KuaiChe,
  ZhuanChe
}