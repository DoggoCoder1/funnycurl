export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const code = `
  #!/bin/bash
  GREEN='\\033[0;32m'
  NC='\\033[0m'  # No Color
  ok() {
  printf "[$GREENOK$NC] $1"
  }
  echo "WowClicker Installer VERSION 1,0"
  USER_AGENT=$(uname)
  if [ "$(uname)" = "Darwin" ]; then
  ok "Detected MacOS."
  fi
`;

  res.status(200).send(code);
}
