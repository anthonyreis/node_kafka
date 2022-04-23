import eventType from '../eventType.js';

export default async function consume(consumer) {
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
