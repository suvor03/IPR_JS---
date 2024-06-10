import ProductTypes from "../ProductTypes.js";
import {Warehouse} from "../Warehouse.js";

export class TropicalOilsUnloadStrategy {
    constructor(warehouse = null) {
        this.storage = warehouse || Warehouse.getInstance();
    }

    getProductType() {
        return ProductTypes.TYPE_TROPICAL_OILS;
    }

    unload(truck) {
        let slots = this.storage.getSlotFreeSpace(truck.type);

        if (slots < truck.capacity) {
            throw new Error('Недостаточно свободного места');
        }

        this.storage.loadSlot(truck.type, truck.capacity);
    }
}