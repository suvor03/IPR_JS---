class Warehouse {
    static instance = null;
    slots = {};

    constructor() {
        if (Warehouse.instance) {
            throw new Error('Use Warehouse.getInstance() to get the single instance of this class.');
        }
        Warehouse.instance = this;
    }

    static getInstance() {
        if (!Warehouse.instance) {
            Warehouse.instance = new Warehouse();
        }
        return Warehouse.instance;
    }

    clone() {
        throw new Error('Warehouse cannot be cloned');
    }

    static getSlots() {
        return Object.values(Warehouse.getInstance().slots);
    }

    addSlot(slot) {
        this.slots[slot.type] = slot;
    }

    static loadSlotsOnce(slots = []) {
        const instance = Warehouse.getInstance();

        if (Object.keys(instance.slots).length !== 0) {
            throw new Error('Slots have already been loaded');
        }

        slots.forEach(slot => {
            instance.addSlot(slot);
        });
    }

    getSlotFreeSpace(type) {
        if (!this.slots[type]) {
            return 0;
        }

        return this.slots[type].freeSpace;
    }

    loadSlot(type, capacity) {
        if (!this.slots[type]) {
            throw new Error('Slot does not exist');
        }

        if (this.slots[type].freeSpace < capacity) {
            throw new Error(`Capacity ${capacity}. Cannot be loaded. Available: ${this.slots[type].freeSpace}`);
        }

        this.slots[type].freeSpace -= capacity;
    }
}