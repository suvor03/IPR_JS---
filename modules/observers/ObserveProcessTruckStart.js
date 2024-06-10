export class ObserveProcessTruckStart {
    observe(message) {
        const start = document.getElementById('process-start');

        let html = `Попытка разгрузки грузовика: ${message.message.item.id}<br>`;

        html += `Груз: ${message.message.item.type.value} в объеме ${message.message.item.capacity} кг.<br><br>`;

        start.innerHTML = html;
    }
}