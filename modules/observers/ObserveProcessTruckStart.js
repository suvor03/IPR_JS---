export class ObserveProcessTruckStart {
    observe(message) {
        let container = document.getElementById("message-container");

        let messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              Попытка разгрузки грузовика: ${message.message.id}<br>
              Груз: ${message.message.type} в объеме ${message.message.capacity} кг.<br>
              <br>
            `;
        container.appendChild(messageElement);
    }
}