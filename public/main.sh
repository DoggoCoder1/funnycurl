#!/bin/bash

ok() {
    printf "${GREEN}[OK]${NC} %s\n" "$1"
}

echo "WowClicker Installer VERSION 1.0"

USER_AGENT=$(uname)
if [ "$USER_AGENT" = "Darwin" ]; then
    ok "Detected macOS."
fi