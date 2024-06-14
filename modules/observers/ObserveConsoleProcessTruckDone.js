export class ObserveConsoleProcessTruckDone {
    observe(message) {
        let item = message.message.item;

        console.log(`Выполнена разгрузка грузовика: ${item.id}`);
        console.log(`Доставлен груз: ${item.type.value} в объеме ${item.capacity} кг.`);
    }
}
