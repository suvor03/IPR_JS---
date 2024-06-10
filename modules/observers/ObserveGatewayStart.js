import {Warehouse} from "../Warehouse.js";

export class ObserveGatewayStart {
    observe(message) {
        const start = document.getElementById('start');
        let html = 'Доступен склад. Слоты размещения склада:<br>';

        const slots = Warehouse.getSlots();
        Object.values(slots).forEach(slot => {
            html += `Тип хранения: ${slot.type.value}<br>Доступный объем: ${slot.freeSpace} кг.<br><br>`;
        });

        const trucks = message.message.item.trucks;
        html += `Запуск обработки грузовиков. Всего грузовиков: ${trucks.length}<br>`;
        trucks.forEach(truck => {
            html += `ID: ${truck.id}<br>Груз: ${truck.type.value}<br>Объем: ${truck.capacity} кг.<br><br>`;
        });

        start.innerHTML = html;
    }
}