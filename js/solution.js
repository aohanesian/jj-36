`use strict`;

// let bodyEl = document.body;
// let bodyChilds = bodyEl.childNodes;
// const ul = bodyChilds[1];
// const li = ul.childNodes;

// console.log(`task 1`);
// let task1 = Array.from(li[2]);
// console.log(task1.length);
//
// console.log(`task2`);
// let arr = [];
// let result = [];

// for (const liText of li) {
//     arr.push(liText.innerHTML);
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== undefined) {
//         result.push(i);
//     }
// }
// console.log(result);
// console.log(arr);

const liTextArr = [];
const liText = document.getElementsByTagName("li");
for (let element of liText) {
    liTextArr.push(element.innerHTML);
}
console.log(liText.length);
console.log(liTextArr);
