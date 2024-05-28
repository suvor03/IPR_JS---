class ObserveConsoleGatewayEnd extends ObserverInterface {
    observe(message) {
        console.log('\n');
        console.log('\x1b[32mЗагрузка складов выполнена.\x1b[0m\n');
        console.log('\x1b[36mТекущее состояние слотов размещения:\x1b[0m\n');

        Warehouse.getSlots().forEach(slot => {
            console.log('Груз: ' + slot.type.value);
            console.log('Доступный объем: ' + slot.freeSpace + '\n');
        });

        console.log('\x1b[0m');
    }
}