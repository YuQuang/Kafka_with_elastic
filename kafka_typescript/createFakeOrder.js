import { KafkaProducer } from './utils/kafka.js';
import { getEnv } from './utils/getenv.js';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';
dotenv.config();

function createFakeOrder() {
    return JSON.stringify({
        "orderId": faker.string.uuid(),
        "userId": faker.string.uuid(),
        "orderStatus": "created",
        "orderDate": new Date().toISOString(),
        "items": [
            {
                "productId": faker.string.uuid(),
                "productName": faker.commerce.productName(),
                "quantity": faker.number.int({ min: 1, max: 100 }),
                "unitPrice": faker.number.float({ min: 1, max: 100 })
            }
        ],
        "paymentMethod": "credit_card",
        "shippingAddress": {
            "recipient": `${faker.person.firstName()} ${faker.person.lastName()}`,
            "phone": faker.phone.number({ style: 'international' }),
            "address": `${faker.location.country()}${faker.location.city()}${faker.location.street()}`,
        },
        "notes": "optional notes",
        "metadata": {}
    });
}

async function main() {
    const kafkaProducer = new KafkaProducer(
        "order-created-producer",
        [ getEnv("KAFKA_BROKER") ]
    );

    kafkaProducer.connect();

    const topic    = getEnv('KAFKA_ORDER_TOPIC');
    const messages =  [
        { value: createFakeOrder() },
    ];

    await kafkaProducer.sendMessage(topic, messages);
    console.log(`Message sent to topic ${topic}:`, messages);
    await kafkaProducer.disconnect();

}

main();