export class Slot {
    constructor(type, freeSpace) {
        this.type = type;
        Object.freeze(this.type);
        this.freeSpace = freeSpace;
    }
}