export class EventDispatcher {
    constructor() {
        this.observers = {};
    }

    attach(eventType, observer) {
        if (!this.observers[eventType]) {
            this.observers[eventType] = [];
        }
        this.observers[eventType].push(observer);
    }

    detach(event) {
        if (this.observers[event] === false) {
            return;
        }

        delete this.observers[event];
    }

    trigger(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(observer => {
                observer.observe(message);
            });
        }
    }
}