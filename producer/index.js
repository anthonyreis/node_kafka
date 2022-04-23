import setKafka from '../common/setKafka.js';
import queueMessage from './queueMessage.js';

(async function setProducer() {
    const params = {
        clientId: 'my-app',
        brokers: ['localhost:9092']
    }

    const kafka = setKafka(params);

    const producer = kafka.producer();

    const { CONNECT, DISCONNECT, REQUEST } = producer.events;

    producer.on(CONNECT, () => {
        console.log('Producer connected');
    });

    await producer.connect();

    producer.on(REQUEST, () => {
        console.log('Message sent');
    });

    producer.on(DISCONNECT, () => {
        console.log('Producer disconnected');
    });

    setInterval(() => {
        queueMessage(producer);
    }, 3000)
})();
