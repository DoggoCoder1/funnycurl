export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`#!/bin/bash
clear
bash -c clear; while true; do echo \"/usr/local/Cellar/$(openssl rand -hex 3)/$(date +%s)\"; sleep 0.01; done
`);
}
