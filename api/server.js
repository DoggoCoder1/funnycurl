// api/server.js

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
for i in {1..50}; do
  echo "Stealing $i $(head -c 10 /dev/random | base64)"
done
clear
echo "YOU ARE HAKCKDED AHAHAHHAHAHSHDAHHHAHHAHHAHHHAHHAHAAH"
echo "files are stolen hahehehehaheha"
echo "hahahhahaha"
`);
}
