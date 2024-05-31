class SpicesUnloadStrategy extends StrategyInterface {
    constructor(warehouse = null) {
        super();
        this.storage = warehouse ? warehouse : Warehouse.getInstance();
    }

    getProductType() {
        return ProductTypes.TYPE_SPICES;
    }

    unload(truck) {
        const slots = this.storage.getSlotFreeSpace(truck.type);

        if (slots < truck.capacity) {
            throw new Error('Not enough free space');
        }

        if ((slots % truck.capacity) !== 0) {
            throw new Error('Free space must be a multiple of 25 kg.');
        }

        this.storage.loadSlot(truck.type, truck.capacity);
    }
}