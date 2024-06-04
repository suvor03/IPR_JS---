import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';
import { Truck } from './Truck.js';

export class TrucksFactory {
    constructor(productTypes) {
        this.productTypes = productTypes;
    }

    createTrucks(trucksCount) {
        const trucks = [];

        const cases = [...this.productTypes];

        do {
            cases.sort(() => Math.random());

            trucks.push(new Truck(
                uuidv4(),
                cases[0],
                Math.floor(Math.random())
            ));
        } while (trucksCount > trucks.length);

        return trucks;
    }
}
