const { exec } = require('child_process');

// Inside your HTTP handler:
exec('echo hello world', (error, stdout, stderr) => {
  console.log('exec callback triggered');
  if (error) {
    console.log('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    return res.end(`error\n`);
  }
  if (stderr) {
    console.log('Stderr:', stderr);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    return res.end(`error\n`);
  }
  console.log('Stdout:', stdout);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(stdout);
});
