# GIT
**Thay đổi commit message**
Git commit -- amend -m "message"

**Thay đổi commit message, đưa từ vùng staging về working directory**

Git restore -- staged <file>

**Thay đổi commit message: đưa từ vùng repository về working directory (uncommit)**
VD: Nếu commit 3 file, thì chỉ được reset tối đa 2 commit. Nếu đã push lên GitHub rồi thì ko nên reset vì sẽ làm ảnh hưởng tới người khác cùng làm chung với mình.

Git reset HEAD~1

**Branching model**

Kiểm tra xem có bao nhiêu branch trên máy. Nhánh đang đứng thì sẽ có dấu * 

Git branch

**Tạo branch mới (nhánh mới và work trên nhánh mới)**

Git checkout -b <branch_name>
VD: Git checkout -b feat/add-testcase-1

**Trở về main branch**

Git checkout main

**Gitignore: Dùng để bỏ qua các file không cần git theo dõi**
.gitignore <file_name>
.gitignore <folder_name>
.gitignore <folder_name>/<file_name>

File phải chưa được commit và add lên staging thì mới dùng .gitignore được

**Tạo branch**

git branch <ten_branch>
git checkout <ten_branch>
git checkout -b <ten_branch>

Git ignore file: dùng để bỏ qua các file không cần git theo dõi

Trên VSCode, tạo 1 file có tên là .gitignore. Trong nội dung file thì ghi tên file muốn ignore
VD: 
.gitignore
<file_name>


# Javascript

**Conventions**

snake_case: chưa dùng
kebab-case: tên file
camelCase: tên biến
PascalCase: tên class


Console log dùng variable: console.log(`${variable_name}`)

**Object**

Khai báo object (đối tượng). Đối tượng dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc một hằng số
Object có thể gán lại giá trị khác

let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}
Trong đó:
- <thuoc_tinh>: giống quy tắc đặt tên
biến
- <gia tri>: có kiểu giống biến, hoặc
là 1 object khác.

VD: 
const product = {
“name”: “Laptop”,
“price”: 500,
“isWindow”: true,
“manufacturer”: {
“name”: “Acer”,
“year”: 2024
}

**Logical Operator**

&&: cả 2 vế của mệnh đề đều đúng
||: một trong hai vế đúng
!: đảo ngược lại giá trị của mệnh đề

Logical operator chỉ dùng cho giá trị boolean

**Array**

VD: const listname =['A', 'B', 'C', 'D', 'E'];
Console.log(listname.length); -- Lấy độ dài của mảng
Console.log(listname[0]) -- Lấy giá trị của phần tử trong mảng theo index


Ứng dụng vòng for để in ra giá trị trong mảng

For (let I =0; i<listname.length; i++){
    Console.log(listname[i]);
}

**Function**

Function là hàm, là một đoạn code được đặt tên để có thể tái sử dụng nhằm thực hiện một task hoặc 1 tính toán cụ thể

function <nameFunction>() {
// code
}

VD: Define function:
Function hello(){
    Console.log('hello world');
}


=> Apply function hello()

For (let i=0; i<10; i++){
    Hello();
}

Function sum(a,b){
    Return a+b;
}

Const total = sum(5,3);
Console.log(total);
