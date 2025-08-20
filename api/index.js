export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const code = `#!/bin/bash
GREEN='\\033[0;32m'
NC='\\033[0m'

ok() {
    printf "${GREEN}[OK]${NC} %s\\n" "$1"
}

echo "WowClicker Installer VERSION 1.0"

USER_AGENT=$(uname)
if [ "$USER_AGENT" = "Darwin" ]; then
    ok "Detected macOS."
fi
`;

  res.status(200).send(code);
}
