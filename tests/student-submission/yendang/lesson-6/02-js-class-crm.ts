class Customer {
    //thuoc tinh
    id: string;
    name: string;
    email: string;
    phone: string;
    // ham khoi tao
    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    // method
    displayInfo() {
        console.log(`${this.id}`);
        console.log(`${this.name}`);
        console.log(`${this.email}`);
        console.log(`${this.phone}`);
    }

    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`new email is: ${this.email}`);
    }
}

const customer1 = new Customer("12345", "Yen", "yenk17@gmail.com", "123456789");
customer1.displayInfo();
customer1.updateEmail("new_yenk17@gmail.com");
