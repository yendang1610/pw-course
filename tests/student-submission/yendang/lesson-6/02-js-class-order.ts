class Order {
    // thuoc tinh
    orderID: string;
    customerName: string;
    items: { name: string; price: number; amount: number; discount: number }[];
    totalAmount: number;
    //ham khoi tao
    constructor(orderID: string, customerName: string) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }
    //method
    addItem(name: string, price: number, amount: number, discount: number) {
        const item1 = { name, price, amount, discount };
        this.items.push(item1);
    }

    calculateTotal() {
        let sum = 0;
        for (const item of this.items) {
            const itemTotal = item.amount * item.price * (1 - item.discount) / 100;
            sum = sum + itemTotal;
        }

        this.totalAmount = sum;
        return this.totalAmount;
    }
}

const order1 = new Order("01", "Yen");
order1.addItem("Macbook", 2000, 1, 15);
order1.addItem("Dell", 1000, 1, 10);

console.log(order1);

order1.calculateTotal();

console.log(order1);

