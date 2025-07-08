const http = require('http');
const { exec } = require('child_process');

http.createServer((req, res) => {
  exec('echo hi', (error, stdout, stderr) => {
    if (error) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end(`Error: ${error.message}\n`);
      return;
    }
    if (stderr) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end(`stderr: ${stderr}\n`);
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(stdout);
  });
}).listen(3000);

console.log('Server running at http://localhost:3000/');
