import {Warehouse} from "../Warehouse.js";

export class ObserveGatewayEnd {
    observe(message) {
        let end = document.getElementById('end');

        let html = 'Загрузка складов выполнена. Текущее состояние слотов размещения:<br><br>';

        let slots = Warehouse.getSlots();

        Object.values(slots).forEach(slot => {
            html += `Груз: ${slot.type.value}<br>Доступный объем: ${slot.freeSpace} кг.<br><br>`;
        });

        end.innerHTML = html;
    }
}