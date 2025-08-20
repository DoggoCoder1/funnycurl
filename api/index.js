export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
echo "Hello, World!"
`);
}
