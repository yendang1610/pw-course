# Sự khác nhau giữa var và let

//var
for (var i = 0;i<=5;i++){
    console.log(i); // in ra 0-5
}
console.log(i); // in ra 6


//let 
for (let i = 0; i <= 5; i++) {
    console.log(i); //in ra 0-5
}
console.log(i); //show lỗi undefined


Đối với var, trong vòng for thì biến được sử dụng trong toàn cục. Var có phạm vi sử dụng là global. Var được khai báo lúc đầu với giá trị là Undefined
Đối với let, trong vòng for thì biến chỉ sử dụng được trong vòng for thôi. Let không thể truy cập trước khi khai báo

console.log(i)
Var a = 5; // không show lỗi, in ra Undefined


console.log(i)
Let a = 5; // báo lỗi, vì biến i chưa được khai báo


# Câu điều kiện If… else

VD: 
let score =8;
if (score >=8){
    console.log('hoc sinh gioi');
    else{
        console.log('hoc sinh kha hoac trung binh');
    }
};

let score = 8;
if (score >= 8) {
    console.log('hoc sinh gioi');
} else if (score >= 6.5 && score < 8) {
    console.log('hoc sinh kha');
} else {
    console.log('hoc sinh trung binh');
};

let month =13;
switch(month){
    case 11: 
        console.log('co 30 ngay');
        break;
    case 12:
        console.log('co 31 ngay')    ;
        break;
    default:
        console.log('thang ko hop le');
}


# So sánh

## So sánh kiểu giá trị và kiểu dữ liệu

== hoặc !=: So sánh kiểu lỏng lẻo, convert  giá trị về kiểu lớn hơn
=== hoặc !==: So sánh tuyệt đối


let result = '5' ==5;
let result1 = '5' === 5;
console.log(result); // in ra true
console.log(result1); // in ra false. Do kiểu dữ liệu là string so sánh với kiểu dữ liệu là number, tuy có cùng giá trị nhưng không giống kiểu dữ liệu nên trả về false

let result3 = '5' != 5;
console.log(result3); // in ra false


# Vòng lặp nâng cao

## For… in: 
lặp qua các key của object (lặp các thuộc tính của object).
VD: In thuộc tính của 1 object

let students = {
    name: 'Yen',
    age: 40,
    city: HN,
};
for (let  property in students){
    console.log(property);
    console.log(students[property]);

Đối với mảng thì for…in giúp truy cập vào phần tử thông qua index

let numbers = [4,5,6];
for (let index in numbers){
    console.log(index); //in ra 0,1,2
    console.log(`index: ${index}: ${numbers[index]}`);
}

## forEach: 
lặp qua các phần tử trong mảng để lấy ra giá trị của từng phần tử

let numbers1 = [4, 5, 6];
numbers1.forEach((val,index) => {
    console.log(`index ${index}: ${val}`);
});
let numbers2 = [4, 5, 6];
numbers2.forEach((val) => {
    console.log(`${val}`);
});


## For….of
Lọc qua mảng, lấy các phần tử ở trong mảng

let names =['A', 'B', 'C','D'];
for (let name of names){
    console.log(name);
}

Break: thoát khỏi vòng lặp

for (let i = 0; i<10;i++){
    if (i==5){
        break;
    }
    console.log(i);
}

## Continue: 
Bỏ qua vòng lặp hiện tại và chạy đến vòng lặp tiếp theo

let numbers = [1,2,3,4,5];
for (let number of numbers){
    if(number %2 === 0){
        continue;
    }
    console.log(number); // in ra 1,3,5
}

# String utils function

* Trim(): loại bỏ khoảng trắng ở đầu và cuối

let str = '           Study JS           ';
console.log(str.trim());

* toUpperCase(): in hoa tất cả các ký tự trong chuỗi

* toLowerCase(): in thường tất cả các ký tự trong chuỗi

let text = 'K17 playwright';
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());


* Include(): kiểm tra chuỗi con có nằm trong chuỗi chính hay không

let str1 = 'hoc Javascript';
console.log(str.includes('java'));

* Replace(): Thay thế một chuỗi con bằng 1 chuỗi con khác

let str1 = 'hoc Javascript';
let text =str.replace('Javascript', 'JS');
console.log(str1);

* Split():  Chia một chuỗi thành các chuỗi con dựa vào 1 ký tự nào đó

let str2 = 'Loi, Tung Anh,Duom';
let result = name.split('n');
console.log(result);

* Substring():  một chuỗi mà chuỗi đó được được cắt theo index truyền vào

let str = 'hoc Javascript rat vui';
let result = str.substring(4,14);
let result2 = str.substring(4);
console.log(result2);

* indexOf():  trả về vị trí đầu tiên xuất hiện của chuỗi con trong chuỗi chính

let str = 'hoc Javascript rat vui';
let result = str.indexOf('vui');
console.log(result);


# Array utils function

* Map(): tạo ra 1 mảng mới bằng cách áp dụng 1 hàm lên từng phần tử trong mảng gốc
let number = [1,2,3,4,5];
let str = ['a','b','c'];
let doubleNumbers = number.map((val) => val*2);
console.log(doubleNumbers);


* Filter(): Tạo ra 1 mảng chứa các phần thử thỏa mãn điều kiện
let number = [1, 2, 3, 4, 5];
let result = number.filter((val) => val % 2 === 1);
console.log(result);

* Find(): Trả về phần tử đầu tiên trong mảng thảo mãn điều kiện

let number = [2, 2, 4, 6];
let result = number.find((val) => val % 2 ===1);
console.log(result);

* Some(): kiểm tra ít nhất có một phần tử thỏa mãn điều kiện, trả về true hoặc false

let number = [2, 2, 4, 6];
let result = number.some((val) => val % 2 === 1);
console.log(result);

* Every(): Kiểm tra tất cả các phần tử trong mảng thỏa mãn điều kiện
let number = [2, 2, 4, 6];
let result1 =number.every((val) => val % 2  ===0);
console.log(result1);

* Push(): Thêm một hoặc nhiều phần tử vào cuối mảng

let str = [1,2];
let.push(3,4);
console.log(str);

* Shift(): Xóa phần tử đầu tiên của mảng và trả về phần tử đó

let number = [1, 2, 3, 4, 5];
let result = number.shift();
console.log(result);
console.log(number);

* Reduce():  Áp dụng lên mỗi phần tử của mảng và trả về một giá trị duy nhất

let number = [1, 2, 3, 4, 5];
let total = number.reduce((total,num) => total + num, 0);
console.log (total);

* Sort():  Sắp xếp theo thứ tự tăng dần của mảng hoặc theo hàm so sánh được cung cấp. Hàm này làm thay đổi mảng gốc

let number = [1, 25, 3, 40, 15];
console.log(number.sort());

Sắp xếp theo thứ tự của bảng mã ACSII hoặc UTF-16. Mỗi phần tử được chuyển đổi thành chuỗi trước khi so sánh

let number = [1, 25, 3, 40, 15];
console.log(number.sort((a,b) => b-a));

Tip dùng:

Nếu muốn tăng dần: (a,b) => a-b;
Nếu muốn giảm dần (a,b) => b-a;

* pop(): Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc

* unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.

