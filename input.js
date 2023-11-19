// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = function(key) {
    // check for ctrl+c
    if (key === '\u0003') {
      process.exit();
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