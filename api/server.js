// api/server.js

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
echo "YOU ARE HAKCKDED AHAHAHHAHAHSHDAHHHAHHAHHAHHHAHHAHAAH"
`);
}
