const http = require('http');
const { exec } = require('child_process');

http.createServer((req, res) => {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes('curl')) {
    exec('./script.sh', (error, stdout, stderr) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error: ${error.message}\n`);
        return;
      }
      if (stderr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Stderr: ${stderr}\n`);
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(stdout);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from browser!\n');
  }
}).listen(3000);
