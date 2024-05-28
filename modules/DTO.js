class DTO {
    constructor(trucks = []) {
        this.trucks = Object.freeze(trucks);
        Object.freeze(this);
    }
}