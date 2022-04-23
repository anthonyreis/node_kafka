console.log('...producer');
import Kafka from 'node-rdkafka';
import queueMessage from './queueMessage.js';

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, { 'topic': 'test' });

setInterval(() => {
    queueMessage(stream);
}, 3000)
