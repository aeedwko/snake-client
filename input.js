let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn();
  const stdin = process.stdin;
  const handleUserInput = (key) => {
    // check for ctrl+c
    if (key === "\u0003") {
      process.exit();
    }

    // directional keys
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }

    // message key
    if (key === " ") {
      connection.write("Say: Good job!");
    }
  };

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};