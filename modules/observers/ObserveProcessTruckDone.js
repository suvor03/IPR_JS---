class ObserveProcessTruckDone extends ObserverInterface {
    observe(message) {
        const truck = message.message.item;
        console.log(`Выполнена разгрузка грузовика: ${truck.id}<br>`);
        console.log(`Доставлен груз: ${truck.type} в объеме ${truck.capacity} кг.<br>`);
        console.log('<br>');
    }
}