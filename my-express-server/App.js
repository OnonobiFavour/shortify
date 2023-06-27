const express = require('express');
const shortid = require('shortid');
const admin = require('firebase-admin');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

const app = express();
app.use(express.json());

app.post('/api/shorten', async (req, res) => {
  const { longUrl } = req.body;

  try {
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:3001/${shortCode}`;

    // Store the long URL and short URL in the Firebase database
    await db.collection('urls').doc(shortCode).set({
      longUrl,
      shortUrl,
      clicks: 0,
    });

    res.status(200).json({ shortUrl });
  } catch (error) {
    console.error('Error generating short URL:', error);
    res.status(500).json({ error: 'Failed to generate short URL' });
  }
});

// Implement other API endpoints for tracking clicks, retrieving URLs, etc.

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
