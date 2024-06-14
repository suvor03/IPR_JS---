export class ObserveProcessTruckFail {
    observe(message) {
        let fail = document.getElementById('process-fail');

        let html = `Ошибка при разгрузке грузовика ID: ${message.message.item.id}<br>`;

        html += `Причина: ${message.message.error.message}<br><br>`;

        fail.innerHTML = html;
    }
}