import {EventDispatcher} from '../components/EventDispatcher.js';
import {ObserveGatewayEnd} from '../modules/observers/ObserveGatewayEnd.js';
import {ObserveGatewayStart} from '../modules/observers/ObserveGatewayStart.js';
import {ObserveProcessTruckDone} from '../modules/observers/ObserveProcessTruckDone.js';
import {ObserveProcessTruckFail} from '../modules/observers/ObserveProcessTruckFail.js';
import {ObserveProcessTruckStart} from '../modules/observers/ObserveProcessTruckStart.js';
import {CheesePowderUnloadStrategy} from '../modules/strategies/CheesePowderUnloadStrategy.js';
import {SpicesUnloadStrategy} from '../modules/strategies/SpicesUnloadStrategy.js';
import {TropicalOilsUnloadStrategy} from '../modules/strategies/TropicalOilsUnloadStrategy.js';
import {DTO} from '../modules/DTO.js';
import {Events} from '../modules/Events.js';
import {ProductTypes} from '../modules/ProductTypes.js';
import {Slot} from '../modules/Slot.js';
import {SlotsLoadHandler} from '../modules/SlotsLoadHandler.js';
import {Warehouse} from '../modules/Warehouse.js';
import {TrucksFactory} from '../modules/TrucksFactory.js';

document.getElementById('runButton').addEventListener('click', () => {
    const shouldLoadSlots = Math.random() > 0.5;
    const warehouseSlots = [
        new Slot(ProductTypes.TYPE_TROPICAL_OILS, Math.floor(Math.random() * (2500 - 25 + 1)) + 25),
        new Slot(ProductTypes.TYPE_SPICES, Math.floor(Math.random() * (2500 - 25 + 1)) + 25),
        new Slot(ProductTypes.TYPE_CHEESE_POWDER, Math.floor(Math.random() * (2500 - 25 + 1)) + 25),
    ];

    if (shouldLoadSlots) {
        try {
            Warehouse.loadSlotsOnce(warehouseSlots);
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log("Skipping slot loading this time");
    }

    const eventDispatcher = new EventDispatcher();

    eventDispatcher.attach(Events.GATEWAY_START, new ObserveGatewayStart());
    eventDispatcher.attach(Events.GATEWAY_DONE, new ObserveGatewayEnd());
    eventDispatcher.attach(Events.PROCESS_TRUCK_START, new ObserveProcessTruckStart());
    eventDispatcher.attach(Events.PROCESS_TRUCK_DONE, new ObserveProcessTruckDone());
    eventDispatcher.attach(Events.PROCESS_TRUCK_FAIL, new ObserveProcessTruckFail());

    const trucksFactory = new TrucksFactory(ProductTypes.getAllTypes());
    const trucks = trucksFactory.createTrucks(Math.floor(Math.random() * (15 - 9 + 1)) + 9);

    const dto = new DTO(trucks);

    const slotsLoadHandler = new SlotsLoadHandler(eventDispatcher);

    slotsLoadHandler.addMode(new CheesePowderUnloadStrategy());
    slotsLoadHandler.addMode(new SpicesUnloadStrategy());
    slotsLoadHandler.addMode(new TropicalOilsUnloadStrategy());

    slotsLoadHandler.handle(dto);
});