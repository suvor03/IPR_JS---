import {Warehouse} from "../Warehouse.js";

export class ObserveGatewayEnd {
    observe() {
        const container = document.getElementById("message-container");

        const messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              <br>
              Загрузка складов выполнена.<br>Текущее состояние слотов размещения:<br>
              <br>
            `;
        container.appendChild(messageElement);

        Warehouse.getSlots().forEach((slot) => {
            const slotElement = document.createElement("div");
            slotElement.innerHTML =
                `
                    Груз: ${slot.type.value}<br>
                    Доступный объем: ${slot.freeSpace}<br>
                    <br>
                `;
            container.appendChild(slotElement);
        });
    }
}