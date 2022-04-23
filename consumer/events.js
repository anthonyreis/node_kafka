export default function events(consumer) {
    const { CONNECT, DISCONNECT, STOP, FETCH_START, FETCH } = consumer.events;

    consumer.on(CONNECT, () => {
        console.log('Consumer connected!');
    });

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
