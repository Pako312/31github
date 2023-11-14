'use strict'
// 1)Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ будет равен элементу массива,
//  а значение (элемент * 100)
// input: [1, 2, 3, 4, 5]
// output: {1: 100, 2: 200, 3: 300 ...}
// let arr = [1,2,3,4,5];
// const sum = arr.reduce((acc,n) => {
//     acc[n]= n*100;
//     return acc;
// }, {})
// console.log(sum)

// 2)Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. 
// Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, использовать reduce и Math.random()
// input: ['hook', 'blackhole']
// output: {'hook': 20, 'blackhole: 100'}
// const skills = ["codify", "makers", "itacademy"];
// const rand = skills.reduce(function (acc, n) {
//   acc[n] = Math.floor(Math.random() * 101);
//   return acc;
// }, {});
// console.log(rand);
// 3)Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
// input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.\
// let a = [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300];

// let arr = [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// const sum = arr.reduce((acc,n) => {
//     if (n % 2 === 0) {
//          acc.even += n
//     }
//     else {
//          acc.odd += n
//     }
//     return acc
// }, { even: 0, odd: 0 })

// 4) Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
// { name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, 
// { name: 'Hermione Granger', house: 'Gryfindor' }]; 
// Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
// C помощью filter и map
// C помощью reduce

const names =  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
{ name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, 
{ name: 'Hermione Granger', house: 'Gryfindor' }]; 
const huffl = names.filter(function(names){
    return names.house === 'Hufflepuff';
}); console.log(huffl);
const HufflepuffNames = names.map(function(nam) {
    return nam.house ==='Hufflepuff';
} );


// const result = arr.reduce((acc,n) => {
//     if (n.house === 'Hufflepuff') { 
//         acc.push(n.name)
//     }
//     return acc
// }, [])

// console.log(result)


// 5) Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему

// const arr = [3, 4, 1, 2, 7];
// let numbers = arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]

// let bignumbers = arr.sort(function(a,b){
//     return b - a;
// }); console.log(bignumbers);

// 6) Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
// От A-Z
// От Z-A
// const letters = ["eda", "pizza", "Ahmed", "Js", "Codify"]
// letters.sort();
// // let reversed = letters.reverse()
// console.log(letters);