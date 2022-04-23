import eventType from '../eventType.js';
import getAnimal from './getAnimal.js';

export default async function queueMessage(producer) {
    const { category, noise } = getAnimal();

    const event = { category, noise };

    const success = await producer.send({
        topic: 'test',
        messages: [{
            value: eventType.toBuffer(event)
        }]
    });

    if (success) console.log('message successfully sent');
    else console.log('something went wrong');
}
