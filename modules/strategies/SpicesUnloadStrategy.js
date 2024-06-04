import {ProductTypes} from "../ProductTypes.js";
import {Warehouse} from "../Warehouse.js";

export class SpicesUnloadStrategy {
    constructor(warehouse = null) {
        this.storage = warehouse ? warehouse : Warehouse.getInstance();
    }

    getProductType() {
        return ProductTypes.TYPE_SPICES;
    }

    unload(truck) {
        const slots = this.storage.getSlotFreeSpace(truck.type);

        if (slots < truck.capacity) {
            throw new Error('Недостаточно свободного места');
        }

        if ((slots % truck.capacity) !== 0) {
            throw new Error('Свободный объем должен быть кратным 25 кг.');
        }

        this.storage.loadSlot(truck.type, truck.capacity);
    }
}