export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const code = `
  #!/bin/bash
  echo "WowClicker Installer VERSION 1,0"
  USER_AGENT=$(uname)
  if [ "$(uname)" = "Darwin" ]; then 
    echo "                    'c.          "
    echo "                 ,xNMM.          "
    echo "               .OMMMMo           "
    echo "               OMMM0,            "
    echo "     .;loddo:' loolloddol;.      "
    echo "   cKMMMMMMMMMMNWMMMMMMMMMM0:    "
    echo " .KMMMMMMMMMMMMMMMMMMMMMMMWd.    "
    echo " XMMMMMMMMMMMMMMMMMMMMMMMX.      "
    echo ";MMMMMMMMMMMMMMMMMMMMMMMM:       "
    echo ":MMMMMMMMMMMMMMMMMMMMMMMM:       "
    echo ".MMMMMMMMMMMMMMMMMMMMMMMMX.      "
    echo " kMMMMMMMMMMMMMMMMMMMMMMMMWd.    "
    echo " .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   "
    echo "  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   "
    echo "    kMMMMMMMMMMMMMMMMMMMMMMd     "
    echo "     ;KMMMMMMMWXXWMMMMMMMk.      "
    echo "       .cooc,.    .,coo:.        "
  fi
`;

  res.status(200).send(code);
}
