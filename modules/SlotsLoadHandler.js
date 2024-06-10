import {Message} from "../components/Message.js";
import Events from "../modules/Events.js";

export class SlotsLoadHandler {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this.modes = {};
    }

    addMode(mode) {
        this.modes[mode.getProductType().name] = mode;
    }

    removeMode(mode) {
        delete this.modes[mode.getProductType().name];
    }

    beforeGateway(context) {
        this.eventDispatcher.trigger(Events.GATEWAY_START, new Message({ item: context }));
    }

    processGateway(item) {
        try {
            this.eventDispatcher.trigger(Events.PROCESS_TRUCK_START, new Message({ item }));

            if (!this.modes[item.type.name]) {
                throw new Error(`Сырье ${item.type.value} не может быть разгружено. Слот разгрузки отсутствует`);
            }

            this.modes[item.type.name].unload(item);
            this.eventDispatcher.trigger(Events.PROCESS_TRUCK_DONE, new Message({ item }));
        } catch (error) {
            this.eventDispatcher.trigger(Events.PROCESS_TRUCK_FAIL, new Message({ item, error }));
        }
    }

    afterGateway(context) {
        this.eventDispatcher.trigger(Events.GATEWAY_DONE, new Message({ item: context }));
    }

    handle(context) {
        this.beforeGateway(context);

        context.trucks.forEach(truck => this.processGateway(truck));

        this.afterGateway(context);
    }
}