class ProductTypes {
    static TYPE_TROPICAL_OILS = 'Тропические масла';
    static TYPE_SPICES = 'Специи';
    static TYPE_CHEESE_POWDER = 'Сырный порошок';

    constructor() {
        throw new Error('ProductTypes is a static enum-like class and cannot be instantiated.');
    }
}