export class ObserveProcessTruckFail {
    observe(message) {
        let container = document.getElementById("message-container");

        let messageElement = document.createElement("div");
        messageElement.innerHTML =
            `
              Ошибка при разгрузке грузовика ID: ${message.message.item.id}<br>
              Причина: ${message.message.error.message}<br>
              <br>
            `;
        container.appendChild(messageElement);
    }
}