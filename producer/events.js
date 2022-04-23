export default function events(producer) {
    const { CONNECT, DISCONNECT, REQUEST } = producer.events;

    producer.on(CONNECT, () => {
        console.log('Producer connected');
    });

    producer.on(REQUEST, () => {
        console.log('Sending message');
    });

    producer.on(DISCONNECT, () => {
        console.log('Producer disconnected');
    });
}
