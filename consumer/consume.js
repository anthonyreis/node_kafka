import eventType from '../eventType.js';
import events from './events.js';

export default async function consume(consumer) {
    events(consumer);

    await consumer.connect();

    await consumer.subscribe({ topic: 'test', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: JSON.parse(eventType.fromBuffer(message.value)),
            })
        },
    });
}
