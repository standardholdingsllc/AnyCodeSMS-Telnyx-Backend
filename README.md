# AnyCodeSMS Telnyx Webhook Receiver

This is a minimal Node.js serverless function for Vercel that receives incoming SMS webhooks from Telnyx.

## Usage

1. Deploy this repo to Vercel.
2. In your Telnyx Messaging Profile, set the Webhook URL to:

   ```
   https://your-vercel-project.vercel.app/api/telnyx-inbound
   ```

3. Incoming SMS events will be logged to the Vercel function logs.

## Customization

- Add your own logic in `api/telnyx-inbound.js` to process, store, or forward messages as needed. 