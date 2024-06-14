export class ObserveConsoleProcessTruckFail {
    observe(message) {
        let item = message.message.item;
        let error = message.message.error;

        console.log(`Ошибка при разгрузке грузовика ID: ${item.id}`);
        console.log(`Причина: ${error.message}`);
    }
}