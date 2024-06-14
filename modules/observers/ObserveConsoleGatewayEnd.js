import { Warehouse } from "../Warehouse.js";

export class ObserveConsoleGatewayEnd {
    observe(message) {
        console.log('Загрузка складов выполнена. Текущее состояние слотов размещения:');

        let slots = Warehouse.getSlots();

        Object.values(slots).forEach(slot => {
            console.log(`Груз: ${slot.type.value}`);
            console.log(`Доступный объем: ${slot.freeSpace} кг.`);
        });
    }
}
