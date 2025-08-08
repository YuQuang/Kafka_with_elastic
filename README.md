# Commands
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
