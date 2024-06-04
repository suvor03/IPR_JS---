import {ProductTypes} from "../ProductTypes.js";
import {Warehouse} from "../Warehouse.js";
import {StrategyInterface} from "../../contracts/StrategyInterface.js";

export class CheesePowderUnloadStrategy extends StrategyInterface {
    constructor(warehouse = null) {
        super();
        this.storage = warehouse ? warehouse : Warehouse.getInstance();
    }

    getProductType() {
        return ProductTypes.TYPE_CHEESE_POWDER;
    }

    unload(truck) {
        const slots = this.storage.getSlotFreeSpace(truck.type);

        const infelicity = Math.ceil(truck.capacity / 25);
        const weight = truck.capacity + (infelicity * 4);

        if (slots < weight) {
            throw new Error('Not enough free space');
        }

        this.storage.loadSlot(truck.type, truck.capacity);
    }
}