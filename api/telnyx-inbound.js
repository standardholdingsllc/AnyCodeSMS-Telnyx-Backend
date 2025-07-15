export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Handle both parsed and raw body
      let event;
      if (typeof req.body === 'string') {
        event = JSON.parse(req.body);
      } else if (req.body) {
        event = req.body;
      } else {
        // Fallback to reading raw body
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            event = JSON.parse(body);
            console.log('Received Telnyx webhook:', event);
            res.status(200).json({ received: true });
          } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(400).json({ error: 'Invalid JSON' });
          }
        });
        return;
      }
      
      console.log('Received Telnyx webhook:', event);
      res.status(200).json({ received: true });
    } catch (err) {
      console.error('Error processing webhook:', err);
      res.status(400).json({ error: 'Invalid request' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 