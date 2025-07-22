export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
for i in {1..30}; do
    echo "WOWOWOOWOWOOWOWOWOOWOWOOWOWOOWOOWOWOWOOOOWOWO"
done
`);
}
