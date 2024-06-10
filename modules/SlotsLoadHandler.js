import {Message} from "../components/Message.js";

export class SlotsLoadHandler {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this.modes = {};
    }

    addMode(mode) {
        this.modes[mode.getProductType().name] = mode;
    }

    removeMode(mode) {
        if (this.modes[mode.getProductType().name]) {
            delete this.modes[mode.getProductType().name];
        }
    }

    beforeGateway(context) {
        this.eventDispatcher.trigger(Event.GATEWAY_START, new Message({ item: context }));
    }

    processGateway(item) {
        try {
            this.eventDispatcher.trigger(Event.PROCESS_TRUCK_START, new Message({ item: item }));

            if (!this.modes[item.type]) {
                throw new Error(`Сырье ${item.type} не может быть разгружено. Слот разгрузки отсутствует`);
            }

            this.modes[item.type.name].unload(item);

            this.eventDispatcher.trigger(Event.PROCESS_TRUCK_DONE, new Message({ item: item }));
        } catch (e) {
            this.eventDispatcher.trigger(Event.PROCESS_TRUCK_FAIL, new Message({ item: item, error: e }));
        }
    }

    afterGateway(context) {
        this.eventDispatcher.trigger(Event.GATEWAY_DONE, new Message({ item: context }));
    }

    handle(context) {
        this.beforeGateway(context);

        context.trucks.forEach(truck => {
            this.processGateway(truck);
        });

        this.afterGateway(context);
    }
}