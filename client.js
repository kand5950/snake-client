const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AK7");
  });


  
  // conn.on("data", () => {
  // conn.write("Move: left");
  // });
  
  // conn.on("data", () => {
  // conn.write("Move: left", 1000);
  // });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};



module.exports = { connect };