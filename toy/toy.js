// создание класса 1 способ
// export function Toy(name, age, priceR, priceK counties) {
//   this.name = name;
//   this.age = age;
//   this.price = price;
//   this.counties = counties;
// }

// Object.assign(Toy.prototype, {
//     toString() {
//       return `Имя: ${this.name}, Возраст: ${this.age}, Цена:${this.Price}, Производитель:${this.counties}`;
//     },
//     fullName() {
//       return `${this.surname} ${this.name}`;
//     },
//     age() {
//       return new Date().getFullYear() - this.yearOfBirthday;
//     },
//     isAdult() {
//       return this.age() >= 18;
//     },
//   });

// создание класса второй споcоб
export class Toy {
  constructor(name, age, priceR, priceK, counties) {
    this.name = name;
    this.age = age;
    this.priceR = priceR;
    this.priceK = priceK;
    this.counties = counties;
  }
  //   полная информация об игрушке
  toString() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Цена:${this.Price}, Производитель:${this.counties}`;
  }

  get Price() {
    return `Цена игрушки: ${this.priceR} рублей и  ${this.priceK} копеек`;
  }
}
