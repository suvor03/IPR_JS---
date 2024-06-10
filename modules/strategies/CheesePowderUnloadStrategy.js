import {ProductTypes} from "../ProductTypes.js";
import {Warehouse} from "../Warehouse.js";

export class CheesePowderUnloadStrategy {
    constructor(warehouse = null) {
        this.storage = warehouse ? warehouse : Warehouse.getInstance();
    }

    getProductType() {
        return ProductTypes.TYPE_CHEESE_POWDER;
    }

    unload(truck) {
        let slots = this.storage.getSlotFreeSpace(truck.type);

        let infelicity = Math.ceil(truck.capacity / 25);
        let weight = truck.capacity + (infelicity * 4);

        if (slots < weight) {
            throw new Error('Недостаточно свободного места');
        }

        this.storage.loadSlot(truck.type, truck.capacity);
    }
}