console.log('...producer');
import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';
import getAnimal from './getAnimal.js';

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, { 'topic': 'test' });

function queueMessage() {
    const { category, noise } = getAnimal();

    const event = { category, noise }

    const success = stream.write(eventType.toBuffer(event));

    if (success) console.log('message wrote successfully to stream');
    else console.log('something went wrong');
}

setInterval(() => {
    queueMessage();
}, 3000)
