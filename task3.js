function ToyFactory() {}
ToyFactory.createToy = function(type, properties) {
    if (type === 'ToyDuck') {
        return new ToyDuck(properties.color, properties.price);
    } else if (type === 'ToyCar') {
        return new ToyCar(properties.color, properties.price, properties.name);
    } else {
        throw new Error('Invalid toy type');
    }
};

function ToyDuck(color, price) {
    this.color = color;
    this.price = price;
}

function ToyCar(color, price, name) {
    this.color = color;
    this.price = price;
    this.name = name;
}

const duck = ToyFactory.createToy('ToyDuck', { color: 'yellow', price: 10 });
const car = ToyFactory.createToy('ToyCar', { color: 'red', price: 20, name: 'Racer' });

console.log(duck);
console.log(car); 