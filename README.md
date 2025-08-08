# Kafka with ELK
練習用架構

## TODO
1. 異步任務池設計
2. 多節點HA
3. 還在想...

## Architecture
![images](./drawio/kafka_with_elastic.png)

## Commands
啟動所有服務
``` bash
# bash
docker-compose \
-f docker-compose.logstash.yaml \
-f docker-compose.kibana.yaml \
-f docker-compose.kafka.yaml \
-f docker-compose.elastic.yaml \
-f docker-compose.networks.yaml \
up
# powershell
docker-compose `
-f docker-compose.logstash.yaml `
-f docker-compose.kibana.yaml `
-f docker-compose.kafka.yaml `
-f docker-compose.elastic.yaml `
-f docker-compose.networks.yaml `
up
```
