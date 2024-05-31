class ObserveConsoleProcessTruckFail extends ObserverInterface {
    observe(message) {
        console.error(`\x1b[31mОшибка при разгрузке грузовика ID: ${message.message.item.id}\x1b[0m`);
        console.error(`\x1b[31mПричина: ${message.message.error.message}\x1b[0m`);
        console.error();
    }
}