// api/telnyx-test.js

export default async function handler(req, res) {
  console.log('=== TEST WEBHOOK RECEIVED ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  
  res.status(200).json({ 
    received: true, 
    timestamp: new Date().toISOString(),
    message: 'Test webhook working!' 
  });
}
