const express = require("express");
const {
  createAdventure,
  getAllAdventures,
  getAdventureById,
  updateAdventure,
  deleteAdventure
} = require("../controllers/adventureController");

const router = express.Router();

router.post("/adventures/new-adventure", createAdventure);
router.get("/adventures/get-all-adventures", getAllAdventures);
router.get("/adventures/:id", getAdventureById);
router.put("/adventures/:id", updateAdventure);
router.delete("/adventures/:id", deleteAdventure);

module.exports = router;
