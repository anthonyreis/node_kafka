import setKafka from '../common/setKafka.js';
import events from './events.js';
import queueMessage from './queueMessage.js';

(async function setProducer() {
    const params = {
        clientId: 'my-app',
        brokers: ['localhost:9092']
    }

    const kafka = setKafka(params);

    const producer = kafka.producer();

    events(producer);

    await producer.connect();

    setInterval(() => {
        queueMessage(producer);
    }, 3000)
})();
