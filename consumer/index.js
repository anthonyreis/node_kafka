import setKafka from '../common/setKafka.js';
import consume from './consume.js';
import events from './events.js';

(async function setConsumer() {
    const params = {
        clientId: 'my-app',
        brokers: ['localhost:9092']
    };

    const kafka = setKafka(params);

    const consumer = kafka.consumer({ groupId: 'kafka' });

    events(consumer);

    await consumer.connect();

    await consumer.subscribe({ topic: 'test', fromBeginning: true });

    consume(consumer);
})();
