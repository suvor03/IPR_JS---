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
        if (this.observers[event.name] === false) {
            return;
        }

        delete this.observers[event.name];
    }

    trigger(event, message) {
        if (this.observers[event.name] === false) {
            return;
        }

        this.observers[event.name].forEach(observer => {
            observer.observe(message);
        });
    }
}