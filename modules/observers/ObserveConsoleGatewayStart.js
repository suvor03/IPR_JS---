class ObserveConsoleGatewayStart extends ObserverInterface {
    observe(message) {
        console.log("\x1b[32mДоступен склад.\x1b[0m");
        console.log("Слоты размещения склада:");
        console.log();

        Warehouse.getSlots().forEach(slot => {
            console.log("\x1b[36mТип хранения: " + slot.type + "\x1b[0m");
            console.log('Доступный объем: ' + slot.freeSpace + " кг.");
            console.log();
        });

        console.log();

        const trucks = message.message.item.trucks;

        console.log("\x1b[32mЗапуск обработки грузовиков.\x1b[0m");
        console.log('Всего грузовиков: ' + trucks.length);
        console.log("\x1b[36mГрузовики:\x1b[0m");
        console.log();

        trucks.forEach(truck => {
            console.log("\x1b[36m");
            console.log('ID: ' + truck.id);
            console.log('Груз: ' + truck.type);
            console.log('Объем: ' + truck.capacity + " кг.\x1b[0m");
            console.log();
        });
    }
}