class ObserveOutputCollection extends ObserverInterface {
    observe(message) {
        this.startOutputCollection();
    }

    startOutputCollection() {
        global.outputCollection = '';
        console.log = (function (oldLog) {
            return function (message) {
                global.outputCollection += message + '\n';
                oldLog.apply(console, arguments);
            };
        })(console.log);
    }
}