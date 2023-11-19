const express = require('express');
const router = express.Router();
const Article = require('../models/article'); // Assicurati che il percorso sia corretto

router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Qualsiasi altra route va qui

// Alla fine del file
module.exports = router;
