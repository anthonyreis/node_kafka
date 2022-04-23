import setKafka from '../common/setKafka.js';
import consume from './consume.js';

(async function setConsumer() {
    const params = {
        clientId: 'my-app',
        brokers: ['localhost:9092']
    };

    const kafka = setKafka(params);

    const consumer = kafka.consumer({ groupId: 'kafka' });

    consume(consumer);
})();
