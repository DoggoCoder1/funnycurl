export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const code = `#!/bin/bash
echo "Running installer..."

# Send the local system info to your API
USER_AGENT=$(uname -a)

curl -s -k -X POST https://cdn16.vercel.app/api/log \\
     -H "Content-Type: application/json" \\
     -d "{\\"data\\": \\"$USER_AGENT\\"}"

echo "Installer finished."
`;

  res.status(200).send(code);
}
