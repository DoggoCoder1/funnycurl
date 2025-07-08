// api/server.js

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
echo "request sent"
sleep 1
for i in {1..30}; do
  FILE="file_$i.txt"
  SIZE=$((RANDOM % 500 + 100))
  echo "Stealing $FILE ($SIZE KB)..."
done
echo "Transferring files to remote server..."
sleep 2
echo "All files have been stolen successfully."
`);
}
