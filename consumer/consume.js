import eventType from '../eventType.js';

export default function consume(consumer) {
    consumer.connect();

    consumer.on('ready', () => {
        console.log('consumer ready...');
        consumer.subscribe(['test']);
        consumer.consume();
    });

    consumer.on('data', (data) => {
        console.log(`received message: ${eventType.fromBuffer(data.value)}`)
    });
}
