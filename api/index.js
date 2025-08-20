export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  res.setHeader('Content-Type', 'text/plain');
  const version = "1.0";
  const code = 
  `#!/bin/bash
  echo "WowClicker Installer"
  echo "Version: ${ver}"
  
  
  `;
  res.status(200).send(``);
}
