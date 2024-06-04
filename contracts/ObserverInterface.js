export class ObserverInterface {
    observe(message) {
        throw new Error('You have to implement the method observe!');
    }
}