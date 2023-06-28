const express = require('express');
const shortid = require('shortid');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyparser = require("body-parser");





// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.post('/shorten', async (req, res) => {
  try{
  const  longUrl  = req.body.longUrl;

    const shortCode = shortid.generate();

    const shortUrl = `http://localhost:3001/${shortCode}`;
    console.log(shortUrl)

    // Store the long URL and short URL in the Firebase database
    // await db.collection('urls').doc(shortCode).set({
    //   longUrl,
    //   shortUrl,
    //   clicks: 0,
    // });

    res.status(200).json({ longUrl, shortUrl });
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
