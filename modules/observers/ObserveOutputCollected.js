class ObserveOutputCollected extends ObserverInterface {
    observe(message) {
        const output = this.collectOutput();

        const filePath = path.join(__dirname, 'runtime', `log-${Date.now()}.html`);

        fs.writeFileSync(filePath, output, 'utf8');

        console.log(output);
    }

    collectOutput() {
        return '<html><body><p>Collected output</p></body></html>';
    }
}