export class Warehouse {
    static instance = null;
    slots = {};

    constructor() {
        if (Warehouse.instance) {
            throw new Error('Хранилище уже было инициализировано');
        }
        Warehouse.instance = this;
    }

    static getInstance() {
        if (!Warehouse.instance) {
            Warehouse.instance = new Warehouse();
        }
        return Warehouse.instance;
    }

    static getSlots() {
        return Object.values(Warehouse.getInstance().slots);
    }

    addSlot(slot) {
        this.slots[slot.type.name] = slot;
    }

    static loadSlotsOnce(slots = []) {
        let instance = Warehouse.getInstance();

        instance.slots = {};

        slots.forEach((slot) => instance.addSlot(slot));
    }

    getSlotFreeSpace(type) {
        return this.slots[type.name] ? this.slots[type.name].freeSpace : 0;
    }

    loadSlot(type, capacity) {
        if (!this.slots[type.name]) {
            throw new Error('Слот отсутствует');
        }

        if (this.slots[type.name].freeSpace < capacity) {
            throw new Error(`Объем ${capacity} не может быть загружен. . Доступно: ${this.slots[type.name].freeSpace}`);
        }

        this.slots[type.name].freeSpace -= capacity;
    }
}