class Vehicle {
    constructor(type, brand, model) {
        this.type = type;
        this.brand = brand;
        this.model = model;
    }

    getDetails() {
        return `Type: ${this.type}, Brand: ${this.brand}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super('Car', brand, model);
        this.doors = doors;
    }

    getDetails() {
        return `${super.getDetails()}, Doors: ${this.doors}`;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, payloadCapacity) {
        super('Truck', brand, model);
        this.payloadCapacity = payloadCapacity;
    }

    getDetails() {
        return `${super.getDetails()}, Payload Capacity: ${this.payloadCapacity} tons`;
    }
}

class VehicleFactory {
    static createVehicle(type, brand, model, attribute) {
        switch (type.toLowerCase()) {
            case 'car':
                return new Car(brand, model, attribute);
            case 'truck':
                return new Truck(brand, model, attribute);
            default:
                throw new Error(`Unsupported vehicle type: ${type}`);
        }
    }
}

const vehicles = [];
function addVehicle(type, brand, model, attribute) {
    try {
        vehicles.push(VehicleFactory.createVehicle(type, brand, model, attribute));
    } catch (error) {
        console.log(error.message);
    }
}
addVehicle('Car', 'Toyota', 'Corolla', 4);
addVehicle('Truck', 'Ford', 'F-150', 2);
addVehicle('Motorcycle', 'Yamaha', 'R1');
vehicles.forEach(vehicle => console.log(vehicle.getDetails()));