import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Handle GET request
      res.status(200).json({ message: 'GET request received' });
      break;
    case 'POST':
      // Handle POST request
      res.status(200).json({ message: 'POST request received' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}