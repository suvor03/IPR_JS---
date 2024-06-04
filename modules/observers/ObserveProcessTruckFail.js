export class ObserveProcessTruckFail {
    observe(message) {
        const container = document.getElementById("message-container");

        const messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              Ошибка при разгрузке грузовика ID: ${message.message.item.id}<br>
              Причина: ${message.message.error.message}<br>
              <br>
            `;
        container.appendChild(messageElement);
    }
}