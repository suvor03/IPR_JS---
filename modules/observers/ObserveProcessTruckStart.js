import {ObserverInterface} from "../../contracts/ObserverInterface.js";

export class ObserveProcessTruckStart extends ObserverInterface {
    observe(message) {
        const truck = message.message.item;
        console.log(`Попытка разгрузки грузовика: ${truck.id}<br>`);
        console.log(`Груз: ${truck.type} в объеме ${truck.capacity} кг.<br>`);
    }
}