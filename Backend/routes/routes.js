const express = require('express');
const router = express.Router();

// Qui definirai le rotte

module.exports = router;
router.get('/articles', async (req, res) => {
    try {
      const articles = await Article.find();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  