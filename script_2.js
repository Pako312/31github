'use strict'

// window.sessionStorage.setItem('name', 'timur')
// const name = window.sessionStorage.getItem('name')

// console.log(name)
// // window.sessionStorage.removeItem('name')

// // Дока Дог

// window.sessionStorage.setItem('name2', 'Собака Дока')
// const name2 = window.sessionStorage.getItem('name2')
// console.log(name2)
// window.sessionStorage.length

// Собака Дока

// window.sessionStorage.setItem('name3', ' f ')
// const name3 = window.sessionStorage.getItem('name3')
// console.log(name3)
// // Собака Дока
// window.sessionStorage.removeItem('name')
// window.sessionStorage.removeItem('user')
// console.log(name);
// window.sessionStorage.clear('name')
// console.log(name);
// window.sessionStorage.setItem('name2', 'Собака Дока')
// window.sessionStorage.setItem('id', '5ac9bc9d1984')

// console.log(window.sessionStorage.key(1))
// // 'name'

// const sessionStorageSize = window.sessionStorage.length
// for (let i = 0; i < sessionStorageSize; i++) {
//   console.log(window.sessionStorage.getItem(sessionStorage.key(i)))
// }

// window.localStorage.setItem('name', 'Дока Дог')
// const name = window.localStorage.getItem('name')
// console.log(name)
// 'Дока Дог'
// window.localStorage.setItem('name', 'Собака Дока')
// alert( localStorage.getItem('name') ); // 1
// localStorage.name = 7;
// alert(localStorage.name)
// установить значение для ключа
// localStorage.name = 2;

// // получить значение по ключу
// alert( localStorage.name ); // 2

// const key = localStorage.name

// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     alert(`${key}: ${localStorage.getItem(key)}`);
//   }
//   console.log(key)
// localStorage.user = {name: "John"};
// alert(localStorage.user); // [object Object]

// localStorage.user = JSON.stringify({name: "John"});

// // немного позже
// let user = JSON.parse( localStorage.user );
// alert( user.name ); // John

// alert( JSON.stringify(localStorage, null, 2) );
localStorage.setItem('test', 1);
alert( localStorage.getItem('test') ); // после обновления: 1