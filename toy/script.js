import { Toy } from "./toy.js";

let toys = [
  new Toy("Мишка", 3, 302, 24, "Россия"),
  new Toy("Заяц", 8, 254, 99, "Германия"),
  new Toy("Поп ит", 8, 120, 99, "Германия"),
  new Toy("Кукла", 10, 120, 93, "Китай"),
  new Toy("Крокодил", 6, 1032, 99, "Франция"),
  new Toy("Акула", 6, 1500, 99, "Франция"),
];

// console.log(toys.toString());

let p = document.querySelector("p");
p.textContent = toys.toString();


// сортировка по убыванию
toys.sort((a, b) => b.priceR - a.priceR)
console.log(toys);

// вывод для выбранного возраста
let ageV = 10;
let ageToy = toys.filter(item => item.age == ageV)
ageToy.forEach(item => console.log(item))


let min = 100000;
let count = 0;

// вывод самых дешевых игрушках
toys.forEach(item =>{
    if(item.priceR < min){
        min = item.priceR;
    }
})
console.log(`Цена самых дешевых игрушек: ${min}`)

// вывод самых дешевых - количество
toys.forEach(item => {
    if (item.priceR == min) {
        // console.log(item.toString());
        count++
    }
})
console.log(`Количество дешевых игрушек: ${count}`);
