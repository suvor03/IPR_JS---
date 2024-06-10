export class EventDispatcher {
    constructor() {
        this.observers = {};
    }

    attach(event, observer) {
        if (!this.observers[event]) {
            this.observers[event] = [];
        }

        this.observers[event].push(observer);
    }

    detach(event) {
        if (this.observers[event]) {
            delete this.observers[event];
        }
    }

    trigger(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach((observer) => {
                observer.observe(message);
            });
        }
    }
}