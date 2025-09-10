const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//4.1 Tu scores, tao mang moi tang 10% neu < 90, giam 5% neu >=90

let result1 = scores.map((val) => val < 90 ? val *1.1 : val * 0.95);
console.log('Mang moi co gia tri la: ', result1);

//4.2 numbers = [1, 2, 3], chuyen thanh mang chuoi

let result2 = numbers.map((val) => String(val));
console.log('mang chuoi moi la: ', result2);

//4.3 Tu numbers = [1, 2, 3], nhan doi moi gia tri

let result3 = numbers.map((val) => val * 2);
console.log('chuoi moi nhan doi gia tri la ',result3);

