class ObserveGatewayStart extends ObserverInterface {
    observe(message) {
        console.log('Доступен склад.<br>Слоты размещения склада:<br>');
        console.log('<br>');

        Warehouse.getSlots().forEach(slot => {
            console.log('Тип хранения: ' + slot.type + '<br>');
            console.log('Доступный объем: ' + slot.freeSpace + ' кг.<br>');
            console.log('<br>');
        });

        console.log('<br>');

        const trucks = message.message.item.trucks;

        console.log('Запуск обработки грузовиков.<br>Всего грузовиков: ' + trucks.length + '<br>');
        console.log('<br>');
        console.log('Грузовики:<br>');
        console.log('<br>');

        trucks.forEach(truck => {
            console.log('ID: ' + truck.id + '<br>');
            console.log('Груз: ' + truck.type + '<br>');
            console.log('Объем: ' + truck.capacity + ' кг.<br>');
            console.log('<br>');
        });
    }
}