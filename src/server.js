const WebSocket = require('ws');
const Redis = require('ioredis');
const WEB_SOCKET_PORT = 3000;
const redis = new Redis({
  host: '18.191.213.233',
  port: 6379
});

redis.subscribe("demo-channel", (err, count) => {
  if (err) {
    // Just like other commands, subscribe() can fail for some reasons,
    // ex network issues.
    console.error("Failed to subscribe: %s", err.message);
  } else {
    // `count` represents the number of channels this client are currently subscribed to.
    console.log(
      `Subscribed successfully! This client is currently subscribed to ${count} channels.`
    );
  }
});

// Create & Start the WebSocket server
const server = new WebSocket.Server({ port: WEB_SOCKET_PORT });

// Register event for client connection
server.on('connection', function connection(ws) {

  // broadcast on web socket when receving a Redis PUB/SUB Event
  redis.on('message', function (channel, message) {
    console.log(
      `Received message: ${message} from ${channel}!`
    )
    ws.send(message);
  })

});

console.log("WebSocket server started at ws://locahost:" + WEB_SOCKET_PORT);