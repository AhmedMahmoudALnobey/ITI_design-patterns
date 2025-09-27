class Store {
    constructor() {
        this.products = [];
        this.subscribers = [];
    }
    addProduct(product) {
        this.products.push(product);
        this.notifySubscribers(product);
    }
    subscribe(observer) {
        this.subscribers.push(observer);
    }
    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(
            (subscriber) => subscriber !== observer
        );
    }
    notifySubscribers(product) {
        this.subscribers.forEach((subscriber) => subscriber.update(product));
    }
}

class Customer {
    constructor(name) {
        this.name = name;
    }
    update(product) {
        console.log(
            `${this.name}, a new product "${product}" is now available in the store!`
        );
    }
}

const store = new Store();

const customer1 = new Customer("Ahmed");
const customer2 = new Customer("Ali");
store.subscribe(customer1);
store.subscribe(customer2);
store.addProduct("Laptop");

store.unsubscribe(customer1);
store.addProduct("Smartphone");
