import { Warehouse } from "../Warehouse.js";

export class ObserveConsoleGatewayStart {
    observe(message) {
        console.log('Доступен склад. Слоты размещения склада:');

        let slots = Warehouse.getSlots();

        Object.values(slots).forEach(slot => {
            console.log(`Тип хранения: ${slot.type.value}`);
            console.log(`Доступный объем: ${slot.freeSpace} кг.`);
        });

        let trucks = message.message.item.trucks;

        console.log(`Запуск обработки грузовиков. Всего грузовиков: ${trucks.length}`);

        trucks.forEach(truck => {
            console.log(`ID: ${truck.id}`);
            console.log(`Груз: ${truck.type.value}`);
            console.log(`Объем: ${truck.capacity} кг.`);
        });
    }
}
