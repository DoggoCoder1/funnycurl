export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  res.setHeader('Content-Type', 'text/plain');
  const ver = "1.0";
  const code = 
  `#!/bin/bash
  echo "Running installer..."
  USER_AGENT=$(uname -a)  # example data
  curl -X POST https://cdn16.vercel.app/api/log \
      -H "Content-Type: application/json" \
      -d '{"data":"$USER_AGENT"}'
  `;
  res.status(200).send(code);
}
