const { connect } = require('./client');

const handleUserInput = function () {
  process.stdout.write('data');
  if (key === '\u0003') {
    process.exit();
  }
  
};

const setupInput = function () {
  stdin.on("data", handleUserInput);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


console.log("Connecting ...");
connect();
