"use strict";
const config = {
   secret: "cmpe273_kafka_passport_mongo",
   frontendURI: "http://twitter-592983799.us-east-1.elb.amazonaws.com:3000",
   kafkaURI: "xxxx,xxxx,xxxx",
   // Start 3 servers on local on diff ports for local setup
   //kafkaURI: "localhost:9092,locahost:9093,localhost:9094",
   mysqlUser: "root",
   mysqlPassword: "xxxx",
   mysqlHost: "xxxx",
   mysqlDatabase: "xxxx",
   awsBucket: "xxxx",
   // Keys can't be added here because AWS categorizes this as vulnerability.
   awsAccessKey: "xxxx",
   awsSecretAccessKey: "xxxx",
   awsPermission: "xxxx"
};

module.exports = config;
