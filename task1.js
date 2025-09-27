class CEO {
    constructor(name, age, address) {
        if (CEO._instance) {
            return CEO._instance;
        }
        this.name = name;
        this.age = age;
        this.address = address;
        CEO._instance = this;
    }

    getCeo() {
        return `CEO: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}

const ceo1 = new CEO("Ahmed Adam", 29, "Egypt");
const ceo2 = new CEO("Ali", 45, "UAE");

console.log(ceo1.getCeo()); 
console.log(ceo2.getCeo());
