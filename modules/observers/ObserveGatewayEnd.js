
class ObserveGatewayEnd extends ObserverInterface {
    observe(message) {
        console.log('<br>');
        console.log('Загрузка складов выполнена.<br>Текущее состояния слотов размещения:<br>');
        console.log('<br>');

        Warehouse.getSlots().forEach(slot => {
            console.log('Груз: ' + slot.type);
            console.log('Доступный объем: ' + slot.freeSpace + '<br>');
            console.log('<br>');
        });
    }
}