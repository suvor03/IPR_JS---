class ObserveConsoleProcessTruckDone extends ObserverInterface {
    observe(message) {
        console.log(`\x1b[32mЗавершена разгрузка грузовика (ID): ${message.message.item.id}\x1b[0m`);
        console.log(`Доставлен груз ${message.message.item.type}`);
        console.log(`Объем груза: ${message.message.item.capacity} кг\x1b[0m`);
        console.log();
    }
}