class EventDispatcher {
    constructor() {
        this.observers = {};
    }

    attach(event, observer) {
        if (this.observers[event.name] === false) {
            this.observers[event.name] = [];
        }

        this.observers[event.name].push(observer);
    }

    detach(event) {
        if (this.observers[event] === false) {
            return;
        }

        delete this.observers[event];
    }

    trigger(event, message) {
        if (this.observers[event] === false) {
            return;
        }

        this.observers[event].forEach(observer => {
            observer.observe(message);
        });
    }
}