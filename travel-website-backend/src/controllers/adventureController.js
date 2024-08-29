const { Adventure } = require("../models");

const createAdventure = async (req, res) => {
  try {
    const { title, description, image, price } = req.body;

    const newAdventure = await Adventure.create({
      title,
      description,
      image,
      price,
    });

    res.status(201).json(newAdventure);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAdventures = async (req, res) => {
  try {
    const adventures = await Adventure.findAll();
    res.status(200).json(adventures);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAdventureById = async (req, res) => {
  try {
    const adventure = await Adventure.findByPk(req.params.id);
    if (adventure) {
      res.status(200).json(adventure);
    } else {
      res.status(404).json({ error: "Adventure not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAdventure = async (req, res) => {
  try {
    const { title, description, image, price } = req.body;

    const adventure = await Adventure.findByPk(req.params.id);
    if (adventure) {
      adventure.title = title;
      adventure.description = description;
      adventure.image = image;
      adventure.price = price;

      await adventure.save();
      res.status(200).json(adventure);
    } else {
      res.status(404).json({ error: "Adventure not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAdventure = async (req, res) => {
  try {
    const adventure = await Adventure.findByPk(req.params.id);
    if (adventure) {
      await adventure.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Adventure not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAdventure,
  getAllAdventures,
  getAdventureById,
  updateAdventure,
  deleteAdventure,
};
