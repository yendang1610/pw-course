const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tinh tong cac gia tri trong scores

let result1 = scores.reduce((result1, num) => result1 + num, 0);
console.log('Tong cac gia tri trong score la ', result1);

//6.2 Tinh tich cac gia tri trong numbers

let result2 = numbers.reduce((result2, num) => result2 * num, 1);
console.log('Tich cac gia tri trong number la ', result2);

//6.3 Tinh tong cac gia tri trong expenses

let result3 = expenses.reduce((result3, num) => result3 + num, 0);
console.log('Tong cac gia tri trong expenses la ', result3);