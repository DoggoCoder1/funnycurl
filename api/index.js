export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`Your user agent is: ${userAgent}`);
}
