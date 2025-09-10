const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của string

for (let newstr of str) {
    console.log(newstr);
}
//2.2 Tạo mảng đảo ngược từ str

let reverseStr = [];
for (let char of str) {
    reverseStr.unshift(char);
}
console.log('Mang dao nguoc cua mang str la ', reverseStr);

//2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr

let firstP = -1;
let lastP = -1;
let i = 0;
for (let val of arr) {
    if (val === 3) {
        if (firstP === -1) {
            firstP = i;
        }
        lastP = i;
    }
    i++;
}

console.log('Vi tri dau tien cua gia tri 3 la ', firstP);
console.log('Vi tri cuoi cung cua gia tri 3 la ', lastP);
