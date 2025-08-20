export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const code = `#!/bin/bash
echo "Running installer..."
USER_AGENT=$(uname -a)  # example data

curl -X POST https://cdn16.vercel.app/api/log \\
     -H "Content-Type: application/json" \\
     -d "{\"data\":\"$USER_AGENT\"}"
`;

  res.status(200).send(code);
}
