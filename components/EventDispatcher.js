export class EventDispatcher {
    constructor() {
        this.observers = {};
    }

    attach(event, ...observers) {
        if (!this.observers[event]) {
            this.observers[event] = [];
        }

        this.observers[event].push(...observers);
    }

    trigger(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(observer => observer.observe(message));
        }
    }
}