# Kafka with ELK
This is a simple architecture for asynchronous Event Driven based on Kafka, Elastic, Kibana, TS script.

We want to implement a simple shopping function based on the architecture.

Our event flow will be like these:
1. Customer create an order
1. Customer pay the money
1. Order been approved
1. Product send to customer
1. Order detail archive

## Architecture
![images](./drawio/kafka_with_elastic.png)

## How to start
If you are using the bash terminal, following the instrunction below
``` bash
# Step 1 Create netwroks
docker network create elastic
docker network create kafka

# Step 2 Docker up
docker-compose \
-f docker-compose.logstash.yaml \
-f docker-compose.kibana.yaml \
-f docker-compose.kafka.yaml \
-f docker-compose.elastic.yaml \
-f docker-compose.kafkaui.yaml \
-f docker-compose.networks.yaml \
up
```

If you are using the powershell terminal, please following the instruction below
``` powershell
# Step 1 Create netwroks
docker network create elastic
docker network create kafka

# Step 2 Docker up
docker-compose `
-f docker-compose.logstash.yaml `
-f docker-compose.kibana.yaml `
-f docker-compose.kafka.yaml `
-f docker-compose.elastic.yaml `
-f docker-compose.kafkaui.yaml `
-f docker-compose.networks.yaml `
up
```

## TODO
- [ ] 異步任務池設計
- [ ] 多節點HA
- [ ] 還在想...