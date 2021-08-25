// 

// Snek Server IP: 135.23.223.133  (corrected!)
// Snek Port: 50542
// Zoom Link to Snek UI: https://us02web.zoom.us/j/86924421191?pwd=UTZUeXVLbFd2UWZQdVVJbFFCQTZCZz09
// Pass:  962883

const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(input) {
 if (input === '\u0003') {
    process.exit();
  }



 
};

setupInput();

console.log("Connecting ...");
connect();