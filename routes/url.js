const express = require('express');
const shortid = require('shortid');
const Url = require('../models/Url');
const { protect } = require('../middleware/auth');
const router = express.Router();


router.post('/shorten', protect, async (req, res) => {
  const { originalUrl } = req.body;

 
  if (!originalUrl || typeof originalUrl !== 'string') {
    return res.status(400).json({ msg: 'Invalid URL' });
  }

  try {
    const shortUrl = shortid.generate();
    const url = new Url({ originalUrl, shortUrl });

    await url.save();

    res.json({ originalUrl, shortUrl });
  } catch (err) {
    console.error('Error saving URL:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});


router.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  console.log('Received shortUrl:', shortUrl); 

  try {
    
    const url = await Url.findOne({ shortUrl }); 
    console.log('URL found:', url); 

    if (url) {
      console.log('Redirecting to:', url.originalUrl); 
      return res.redirect(url.originalUrl);
    } else {
      console.log('No URL found for code:', shortUrl);
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json('Server error');
  }
});

module.exports = router;
