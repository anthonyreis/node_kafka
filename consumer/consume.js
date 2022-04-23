import eventType from '../eventType.js';

export default async function consume(consumer) {
    const { CONNECT, DISCONNECT, STOP, FETCH_START, FETCH } = consumer.events;

    consumer.on(CONNECT, async () => {
        console.log('Consumer connected!');

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
    });

    await consumer.connect();

    consumer.on(FETCH_START, () => {
        console.log('Consumer started fetching messages');
    });

    consumer.on(FETCH, () => {
        console.log('Consumer finished fetching messages');
    });

    consumer.on(DISCONNECT, () => {
        console.log('Consumer disconnected!');
    });

    consumer.on(STOP, () => {
        console.log('Consumer stopped!');
    });
}
