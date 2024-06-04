import {ObserverInterface} from "../../contracts/ObserverInterface.js";

export class ObserveProcessTruckFail extends ObserverInterface {
    observe(message) {
        const truck = message.message.item;
        const error = message.message.error;
        console.log(`Ошибка при разгрузке грузовика ID: ${truck.id}<br>`);
        console.log(`Причина: ${error.message}<br>`);
        console.log('<br>');
    }
}