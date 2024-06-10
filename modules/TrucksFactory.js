import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';
import { Truck } from './Truck.js';

export class TrucksFactory {
    constructor(productTypes) {
        this.productTypes = productTypes;
    }

    createTrucks(trucksCount) {
        let trucks = [];

        let cases = [...this.productTypes];

        while (trucksCount > trucks.length) {
            cases.sort(() => Math.random() - 0.5);
            trucks.push(new Truck(uuidv4(), cases[0], Math.floor(Math.random() * 100 + 25)));
        }

        return trucks;
    }
}
