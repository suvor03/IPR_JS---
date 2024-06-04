export class DTO {
    constructor(trucks = []) {
        this.trucks = trucks;
        Object.freeze(this);
    }
}