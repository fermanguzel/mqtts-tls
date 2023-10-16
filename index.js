const mqtt = require("mqtt");
const fs = require("fs");
const KEY = "./tls-key.pem";
const CERT = "./tls-cert.pem";
const TRUSTED_CA_LIST = ["./crt.ca.cg.pem"];

const options = {
  host: "c57c8a7f0dbf4b2280337c6ff6700c71.s1.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "ferman",
  password: "Ferman21",
  keyPath: KEY,
  certPath: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
};

const client = mqtt.connect(options);

client.on("connect", () => {
  console.log("Connected");

  client.subscribe("my/test/topic", (error) => {
    if (!error) {
      console.log("Subscribed to 'my/test/topic'");
    }
  });

  client.publish("my/test/topic", "Hello", (error) => {
    if (!error) {
      console.log("Published 'Hello' to 'my/test/topic'");
    }
  });
});

client.on("error", (error) => {
  console.log(error);
});

client.on("message", (topic, message) => {
  console.log("Received message:", topic, message.toString());
});
