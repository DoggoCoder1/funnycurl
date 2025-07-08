// api/server.js

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
echo "request sent"
sleep 1
for i in {1..300}; do
  SIZE=$((RANDOM % 5000 + 100))
  echo "Stealing file ($SIZE KB)..."
done
echo "doing stuff..."
sleep 2
clear
echo "files stolen lel"
`);
}
