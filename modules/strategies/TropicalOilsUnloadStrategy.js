import {ProductTypes} from "../ProductTypes.js";
import {Warehouse} from "../Warehouse.js";
import {StrategyInterface} from "../../contracts/StrategyInterface.js";

export class TropicalOilsUnloadStrategy extends StrategyInterface {
    constructor(warehouse = null) {
        super();
        this.storage = warehouse ? warehouse : Warehouse.getInstance();
    }

    getProductType() {
        return ProductTypes.TYPE_TROPICAL_OILS;
    }

    unload(truck) {
        const slots = this.storage.getSlotFreeSpace(truck.type);

        if (slots < truck.capacity) {
            throw new Error('Not enough free space');
        }

        this.storage.loadSlot(truck.type, truck.capacity);
    }
}