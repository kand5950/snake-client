
let connection;

const setupInput = function (conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
}


  const handleUserInput = function (key) {
    // ctrl + c => exit app 
    if (key === '\u0003') {
      process.exit();
    } if (key === 'w' || key === 'W') {
      connection.write('Move: up');
      } if (key === 'd' || key === 'D') {
      connection.write('Move: right');
      } if (key === 's' || key === 'S') {
     connection.write('Move: down');
      } if (key === 'a' || key === 'A') {
      connection.write('Move: left')
      } if (key === 'b') {
        connection.write("Say: Bye")
      }

  };


module.exports = { setupInput };