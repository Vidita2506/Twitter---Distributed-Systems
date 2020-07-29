"use strict";
module.exports = {
  mongoDBURI: "xxxx",
  kafkaURI: "xxxx,xxxx,xxxx",
  // Start 3 brokers on local on diff ports for local setup
  //kafkaURI: "localhost:9092,locahost:9093,localhost:9094",
  redisPort: 6379,
  //redisHost: "localhost" // Use this for local redis
  redisHost: "xxxx"
};
