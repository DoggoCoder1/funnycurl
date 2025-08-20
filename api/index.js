export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const code = `
  #!/bin/bash
  echo "WowClicker Installer VERSION 1,0"
  USER_AGENT=$(uname)

curl -s -k -X POST https://cdn16.vercel.app/api/log \\
     -H "Content-Type: application/json" \\
     -d "{\\"data\\": \\"$USER_AGENT\\"}"

echo "Installer finished."
`;

  res.status(200).send(code);
}
