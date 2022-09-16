# GraphQL POC

Run the [Kafka Consumer](https://github.com/isaCarvalho/kafka-consumer-poc).
Run

```
$ nvm use v12.22.12
$ npm install
$ node index.js
```

## Query example

```
query {
  tasks {
    id,
    name
  }
}
```
