class Events {
    static GATEWAY_START = 'GATEWAY_START';
    static PROCESS_TRUCK_START = 'PROCESS_TRUCK_START';
    static PROCESS_TRUCK_DONE = 'PROCESS_TRUCK_DONE';
    static PROCESS_TRUCK_FAIL = 'PROCESS_TRUCK_FAIL';
    static GATEWAY_DONE = 'GATEWAY_DONE';

    constructor() {
        throw new Error('Events is a static enum-like class and cannot be instantiated.');
    }
}