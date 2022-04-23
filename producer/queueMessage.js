import eventType from '../eventType.js';
import getAnimal from './getAnimal.js';

export default function queueMessage(stream) {
    const { category, noise } = getAnimal();

    const event = { category, noise }

    const success = stream.write(eventType.toBuffer(event));

    if (success) console.log('message wrote successfully to stream');
    else console.log('something went wrong');
}
