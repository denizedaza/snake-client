// 

// Snek Server IP: 135.23.223.133  (corrected!)
// Snek Port: 50542
// Zoom Link to Snek UI: https://us02web.zoom.us/j/86924421191?pwd=UTZUeXVLbFd2UWZQdVVJbFFCQTZCZz09
// Pass:  962883

const { connect } = require('./client');
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());