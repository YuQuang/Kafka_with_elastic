from confluent_kafka import Producer

conf = {
    'bootstrap.servers': '140.128.88.181:9092',  # Kafka broker 位址
}

producer = Producer(conf)

def delivery_report(err, msg):
    if err is not None:
        print('❌ Message delivery failed:', err)
    else:
        print(f'✅ Message delivered to {msg.topic()} [{msg.partition()}]')

# 寫入訊息到 topic "test-topic"
producer.produce('test-topic', key='key1', value='{"test":"gotone"}', callback=delivery_report)
producer.flush()
