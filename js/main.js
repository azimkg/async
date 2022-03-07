// ! асинхронность
// alert("hello");
// console.log("world");

// setTimeout(() => {
//   console.log(1);
// }, 2000);
// console.log(2);
// function func() {
//   console.log("hello1");
// }
// setTimeout(func, 1000);
// setTimeout(() => {
//   console.log("hello2");
// }, 1000);
// console.log("hello3");

// const id = setTimeout(() => {
//   console.log("2");
// }, 1000);

// const id2 = setTimeout(() => {
//   console.log("hello world");
// }, 1500);
// console.log(id);
// clearTimeout(id2);

// let i = 0;
// const id = setInterval(() => {
//   console.log(`hello ${++i}`);
// }, 1000);
// setTimeout(() => {
//   clearTimeout(id);
// }, 5000);

// ! разбор promise, асинхронность, запрросы
// console.log(1);
// console.log(2);
// console.log(3);
// delay(5000);
// console.log("hello");

// function outer() {
//   function inner() {
//     console.log("hello");
//   }
//   inner();
// }
// outer();

// function rec(n) {
//   console.log(n);
//   if (n <= 1) return;
//   rec(n - 1);
// }
// rec(5);

// setTimeout(() => {
//   console.log("Preparing data ...");
//   let data = {
//     server: "localhost",
//     port: 8000,
//     status: 200,
//   };
//   setTimeout(() => {
//     console.log(data);
//   }, 2000);
// }, 2000);

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     let data = {
//       server: "localhost",
//       port: 8000,
//       status: 200,
//     };
//     if (data) {
//       resolve(JSON.stringify(data));
//     } else {
//       reject("Error 404!");
//     }
//   }, 2000);
// });
// myPromise
//   .then((response) => console.log(JSON.parse(response))) //then успешный кейс
//   .catch((err) => console.error(err)) //catch не успешный кейс
//   .finally(() => console.log("finish!")); // finaly выводит любой результат, сообщает о том, что promise отработала

// async function getData() {
//   await myPromise
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err))
//     .finally(() => console.log("finish!"));
//   console.log("Hello!");
// }
// getData();

const API_URL = "https://restcountries11.com/v3.1/all";
async function getData() {
  try {
    let data = await fetch(API_URL).then((res) => res.json());
    console.log(data);
  } catch {
    console.log(error);
  }
}
getData();

// !промисы
// const age = 22;
// const newPromise = new Promise(function (resolve, reject) {
//   if (age === 22) {
//     resolve({ age, status: true });
//   } else {
//     reject({ age, status: false });
//   }
// });
// newPromise.then((result) => console.log(result, "success!"));
// newPromise.catch((err) => console.log(err, "error"));
// newPromise.finally(() => console.log("finish"));

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(
//       new Promise((res, rej) => {
//         setTimeout(() => {
//           res("Say hello");
//         }, 1000);
//       })
//     );
//   }, 1000);
// });
// // console.log(p);
// p.then((result) => console.log(result, "success!"));

// !XMLHttpRequest
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/");
// xhr.send();
// xhr.onload = function () {
//   console.log(JSON.parse(xhr.response));
// };

// fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => response.json());
// fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => console.log(res));
// fetch("https://pokeapi.co/api/v2/pokemon/").catch((err) => console.log(err));

// console.log("hello");

//!Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.eu/rest/v2/all

// fetch("https://restcountries.eu/rest/v2/all").then((res) => res.json());
// fetch("https://restcountries.eu/rest/v2/all").then((data) => {
//   data.forEach((item) => {
//     console.log(item);
//   });
// });
