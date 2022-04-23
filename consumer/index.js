console.log('...consumer');
import Kafka from 'node-rdkafka';
import consume from './consume.js';

const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consume(consumer);
