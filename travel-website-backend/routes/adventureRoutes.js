// backend/routes/adventureRoutes.js
const express = require('express');
const Adventure = require('../models/adventure');
const router = express.Router();

//Ajouter une aventure
router.post('/adventure', async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    console.log('Adventure Model:', Adventure);
    const adventure = await Adventure.create(req.body);
    res.status(201).json(adventure);
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Obtenir toutes les aventures
router.get('/', async (req, res) => {
  try {
    const adventures = await Adventure.findAll();
    res.json(adventures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtenir une aventure spécifique
router.get('/:id', async (req, res) => {
  try {
    const adventure = await Adventure.findByPk(req.params.id);
    if (adventure) {
      res.json(adventure);
    } else {
      res.status(404).json({ message: 'Adventure not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
