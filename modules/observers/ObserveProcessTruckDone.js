export class ObserveProcessTruckDone {
    observe(message) {
        const output = document.getElementById('process-done');
        let html = `Выполнена разгрузка грузовика: ${message.message.item.id}<br>`;
        html += `Доставлен груз: ${message.message.item.type.value} в объеме ${message.message.item.capacity} кг.<br><br>`;

        output.innerHTML = html;
    }
}