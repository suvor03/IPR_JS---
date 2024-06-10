export class Warehouse {
    constructor() {
        this.slots = {};
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Warehouse();
        }
        return this.instance;
    }

    static getSlots() {
        return this.getInstance().slots;
    }

    addSlot(slot) {
        this.slots[slot.type.name] = slot;
    }

    static loadSlotsOnce(slots = []) {
        let instance = this.getInstance();

        if (Object.keys(instance.slots).length !== 0) {
            throw new Error('Товары загружены ранее');
        }

        slots.forEach(slot => instance.addSlot(slot));
    }

    getSlotFreeSpace(type) {
        return this.slots[type.name] ? this.slots[type.name].freeSpace : 0;
    }

    loadSlot(type, capacity) {
        if (!this.slots[type.name]) {
            throw new Error('Слот отсутствует');
        }

        let slot = this.slots[type.name];
        if (slot.freeSpace < capacity) {
            throw new Error(`Объем ${capacity}. Не может быть загружен. Доступно: ${slot.freeSpace}`);
        }

        slot.freeSpace -= capacity;
    }
}