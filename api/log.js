export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Received data:', data);
    res.status(200).send(`${data}`);  // simple acknowledgment
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
