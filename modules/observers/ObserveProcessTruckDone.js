export class ObserveProcessTruckDone {
    observe(message) {
        const container = document.getElementById("message-container");

        const messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              Выполнена разгрузка грузовика: ${message.message.item.id}<br>
              Доставлен груз: ${message.message.item.type.value} в объеме ${message.message.item.capacity} кг.<br>
              <br>
            `;
        container.appendChild(messageElement);
    }
}