export class ObserveConsoleProcessTruckStart {
    observe(message) {
        let item = message.message.item;

        console.log(`Попытка разгрузки грузовика: ${item.id}`);
        console.log(`Груз: ${item.type.value} в объеме ${item.capacity} кг.`);
    }
}
