# MQTT Client with TLS and Authentication

This is a Node.js MQTT client code example that connects to a secure MQTT broker using TLS/SSL encryption and authentication. It demonstrates how to publish and subscribe to MQTT topics with the HiveMQ cloud-based broker.

## Prerequisites

Before running the code, make sure you have the following prerequisites:

1. Node.js installed on your system.
2. TLS key and certificate files for the client (`tls-key.pem` and `tls-cert.pem`).
3. A trusted certificate authority file (`crt.ca.cg.pem`) to validate the broker's certificate.
4. Access to the HiveMQ MQTT broker.

## Installation

1. Clone or download this repository to your local machine.

2. Install the required Node.js packages by running:

   ```bash
   npm install
   ```

## Usage

1. Open the **"app.js"** file and replace the following placeholders with your specific values:

- **"KEY"** and **"CERT"** with the paths to your TLS key and certificate files.
- **"TRUSTED_CA_LIST"** with the path to your trusted CA file.
- **"host"**, **"port"**, **"username"**, and **"password"** with your HiveMQ MQTT broker credentials.

2. Save your changes.

3. Run the MQTT client by executing the following command:

```bash
node app.js
```

4. The client will connect to the MQTT broker, subscribe to the "my/test/topic" topic, and publish a "Hello" message to it.

## MQTT Client Actions

- The client connects to the MQTT broker using the provided TLS/SSL encryption and authentication.
- It subscribes to the "my/test/topic" MQTT topic.
- It publishes a "Hello" message to the "my/test/topic" topic.
- Received messages from subscribed topics are displayed in the console.

## Troubleshooting

If you encounter any issues or errors, please check the following:

- Ensure that the paths to your key, certificate, and trusted CA files are correct.
- Verify that your MQTT broker credentials (username and password) are accurate.
- Make sure your system has access to the internet, as the code connects to a cloud-based MQTT broker.

## License

This code is released under the [MIT License.](https://github.com/fermanguzel/mqtts-tls/blob/main/LICENSE)

## Acknowledgments

This code example uses the **mqtt.js** library for MQTT communication.

Feel free to adapt and modify this code for your specific needs. For more information on MQTT and the HiveMQ MQTT broker, please refer to the official documentation.

For any questions or issues, please open an issue on this GitHub repository.

Happy MQTT messaging
