const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 1.1 Kiểm tra "Nguyễn" trong name

console.log('Kiểm tra "Nguyễn" trong name ', name.includes('Nguyễn'));

// 1.2 Kiểm tra "@" trong email

console.log('Kiểm tra "@" trong email ', email.includes('@'));

// 1.3 Kiểm tra "Pro" trong producName

console.log('Kiểm tra "Pro" trong producName ', productName.includes('Pro'));

// 2.1 Tìm vị trí "a" trong name

let result1 = name.indexOf('a');
console.log('vị trí "a" trong name la ', result1);

let result1a = name.indexOf('A');
console.log('vị trí "A" trong name la ', result1a);

// 2.2 Tìm vị trí "@" trong email

let result2 = email.indexOf('@');
console.log('vị trí "@" trong email la ', result2);

// 2.3 Tìm vị trí "Javascript" trong description

let result3 = description.indexOf('JavaScript');
console.log('vị trí "JavaScript" trong description la ', result3);

