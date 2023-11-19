const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Connection successfully established.");
    conn.write("Name: EK");
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};