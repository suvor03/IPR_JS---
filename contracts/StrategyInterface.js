class StrategyInterface {
    getProductType() {
        throw new Error('You have to implement the method getProductType!');
    }

    unload(truck) {
        throw new Error('You have to implement the method unload!');
    }
}