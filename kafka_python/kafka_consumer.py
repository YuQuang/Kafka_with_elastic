from confluent_kafka import Consumer

conf = {
    'bootstrap.servers': '140.128.88.181:9092',
    'group.id': 'test-group',  # 消費者群組 ID
    'auto.offset.reset': 'earliest'  # 從最早的訊息開始讀
}

consumer = Consumer(conf)
consumer.subscribe(['test-topic'])

print("🚀 Listening for messages... Press Ctrl+C to stop.")

try:
    while True:
        msg = consumer.poll(1.0)  # 每秒輪詢一次
        if msg is None:
            continue
        if msg.error():
            print("❌ Error:", msg.error())
        else:
            print(f"📩 Received: {msg.key()} => {msg.value()}")
except KeyboardInterrupt:
    pass
finally:
    consumer.close()
