"use strict";
const config = {
   secret: "cmpe273_kafka_passport_mongo",
   frontendURI: "http://twitter-592983799.us-east-1.elb.amazonaws.com:3000",
   kafkaURI: "3.82.252.69:9092,54.197.8.135:9092,3.82.218.63:9092",
   // Start 3 servers on local on diff ports for local setup
   //kafkaURI: "localhost:9092,locahost:9093,localhost:9094",
   mysqlUser: "root",
   mysqlPassword: "cmpepassword",
   mysqlHost: "cmpedatabase.cxwydwkipclw.us-east-1.rds.amazonaws.com",
   mysqlDatabase: "twitter",
   awsBucket: "cmpe273twitter",
   // Keys can't be added here because AWS categorizes this as vulnerability.
   awsAccessKey: "xxxx",
   awsSecretAccessKey: "xxxx",
   awsPermission: "xxxx"
};

module.exports = config;
