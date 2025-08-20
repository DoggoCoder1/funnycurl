export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  res.setHeader('Content-Type', 'text/plain');
  const ver = "1.0";
  const code = 
  `#!/bin/bash
  echo "Running installer..."
  USER_AGENT=$(uname -a)
  `;
  res.status(200).send(code);
}
