export class ObserveProcessTruckStart {
    observe(message) {
        const container = document.getElementById("message-container");

        const messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              Попытка разгрузки грузовика: ${message.message.id}<br>
              Груз: ${message.message.type} в объеме ${message.message.capacity} кг.<br>
              <br>
            `;
        container.appendChild(messageElement);
    }
}