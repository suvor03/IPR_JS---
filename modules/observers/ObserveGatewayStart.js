import {Warehouse} from "../Warehouse.js";

export class ObserveGatewayStart {
    observe(message) {
        let container = document.getElementById("message-container");

        let messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              Доступен склад.<br>Слоты размещения склада:<br>
              <br>
            `;
        container.appendChild(messageElement);

        Warehouse.getSlots().forEach((slot) => {
            let slotElement = document.createElement("div");
            slotElement.innerHTML =
                `
                    Тип хранения: ${slot.type.value}<br>
                    Доступный объем: ${slot.freeSpace} кг.<br>
                    <br>
                `;
            container.appendChild(slotElement);
        });

        messageElement.innerHTML +=
            `
              <br>
              Запуск обработки грузовиков.<br>Всего грузовиков: ${message.message.item.trucks.length}<br>
              <br>
              Грузовики:<br>
              <br>
            `;

        message.message.item.trucks.forEach((truck) => {
            let truckElement = document.createElement("div");
            truckElement.innerHTML =
                `
                    ID: ${truck.id}<br>
                    Груз: ${truck.type.value}<br>
                    Объем: ${truck.capacity} кг.<br>
                    <br>
                `;
            container.appendChild(truckElement);
        });
    }
}