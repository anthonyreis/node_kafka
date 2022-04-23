import { Kafka } from 'kafkajs';

export default function setKafka({ clientId, brokers }) {
    const kafka = new Kafka({
        clientId,
        brokers
    });

    return kafka;
}
