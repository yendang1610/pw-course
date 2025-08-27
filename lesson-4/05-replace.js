const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.

let result1 = phoneNumber.replaceAll(' ', '.');
console.log('Chuoi moi sau khi thay doi la: ', result1);

// 2. Thay "lỗi" bằng "bug" trong report.

let result2 = report.replace('lỗi', 'bug');
console.log('Chuoi moi sau khi thay doi la: ', result2);

// 3. Thay "," bằng "." trong numbersStr.

let result3 = numbersStr.replaceAll(',', '.');
console.log('Chuoi moi sau khi thay doi la: ', result3);