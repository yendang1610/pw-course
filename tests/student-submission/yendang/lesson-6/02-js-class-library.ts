class Library {
    //thuoc tinh
    name: string;
    location: string;
    books: { title: string; author: string }[];

    //ham khoi tao
    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    //method
    addBook(title: string, author: string) {
        const book = { title, author };
        this.books.push(book);
        console.log(`Book has been added: ${title}`)
    }
    findBook(title: string) {
        const result = this.books.find((book) => book.title === title);
        if (result != undefined) {
            console.log(`Book has been found: ${result.title}`);
        } else {
            console.log(`Cannot find book: ${title}`);
        }
    }
}

const myLibrary = new Library ("Thu vien Cau Giay","Ha Noi");
myLibrary.addBook("Van hoc T1","Tac gia 1");
myLibrary.addBook("Toan hoc T1","Tac gia 2");

myLibrary.findBook("Van hoc T1");
myLibrary.findBook("Van hoc T2");


