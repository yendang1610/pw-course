const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
numbers.push(4);
console.log('Mang numbers moi la: ', numbers);

names.push("David");
console.log('Mang names moi la: ', names);

// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].

let last = numbers.pop();
console.log('mang sau khi xoa phan tu cuoi cung la: ', numbers);
console.log('gia tri cuoi cung da xoa la: ', last);

let lastName = names.pop();
console.log('mang sau khi xoa phan tu cuoi cung la: ', names);
console.log('gia tri cuoi cung da xoa la: ', lastName);

// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.

numbers.unshift(0);
console.log('mang numbers sau khi them 0 vao dau se la: ', numbers);

names.unshift("David");
console.log('mang names sau khi them David vao dau se la: ', names);

// 4. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4]

numbers.push(4);
console.log('Mang numbers moi la: ', numbers);

for (let i = 0; i <= 1; i++) {
    let result = numbers.shift();
}
console.log('mang moi sau khi loai bo phan tu dau la: ', numbers);