// 

// Snek Server IP: 135.23.223.133  (corrected!)
// Snek Port: 50542
// Zoom Link to Snek UI: https://us02web.zoom.us/j/86924421191?pwd=UTZUeXVLbFd2UWZQdVVJbFFCQTZCZz09
// Pass:  962883

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from server:', data)
  })

  return conn;
};

console.log("Connecting ...");
connect();