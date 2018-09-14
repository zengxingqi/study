import Stutent from './person'
import didi from './car'


let p = new Stutent('星旗', 10, 'A1')
p.study()

let car = new didi.KuaiChe(100, '宝马')
let che = new didi.Trip(car)
che.start()
che.end()
