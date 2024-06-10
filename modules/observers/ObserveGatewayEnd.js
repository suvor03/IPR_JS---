import {Warehouse} from "../Warehouse.js";

export class ObserveGatewayEnd {
    observe() {
        let container = document.getElementById("message-container");

        let messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              <br>
              Загрузка складов выполнена.<br>Текущее состояние слотов размещения:<br>
              <br>
            `;
        container.appendChild(messageElement);

        Warehouse.getSlots().forEach((slot) => {
            let slotElement = document.createElement("div");
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