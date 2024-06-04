import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';
import { Truck } from './Truck.js';

class TrucksFactory {
    constructor(productTypes) {
        this.productTypes = productTypes;
    }

    createTrucks(trucksCount) {
        const trucks = [];
        const cases = [...this.productTypes];

        do {
            cases.sort(() => Math.random() - 0.5);

            trucks.push(new Truck(
                uuidv4(),
                cases[0],
                Math.floor(Math.random() * (125 - 25 + 1)) + 25
            ));
        } while (trucksCount > trucks.length);

        return trucks;
    }
}

export { TrucksFactory };
