import { Kafka } from 'kafkajs';

export class KafkaProducer {
    constructor(clientId, brokers) {
        this.kafka = new Kafka({
            clientId: clientId,
            brokers: brokers,
        });
        this.producer = this.kafka.producer();
        this.connected = false;
    }

    async connect() {
        if (!this.connected) {
            await this.producer.connect();
            this.connected = true;
        }
    }

    async sendMessage(topic, messages) {
        if (!this.connected) {
            await this.connect();
        }
        await this.producer.send({ topic, messages });
    }

    async disconnect() {
        if (this.connected) {
            await this.producer.disconnect();
            this.connected = false;
        }
    }
}