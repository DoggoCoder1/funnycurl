const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('script.sh', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error reading file');
      return;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  });
})