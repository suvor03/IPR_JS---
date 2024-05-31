class ObserveConsoleProcessTruckStart extends ObserverInterface {
    observe(message) {
        console.log(`\x1b[33mПопытка разгрузки грузовика: ${message.message.item.id}\x1b[0m`);
        console.log(`Груз ${message.message.item.type} в объеме ${message.message.item.capacity} кг.\x1b[0m`);
    }
}