require("dotenv").config();
const express = require("express");
const cors = require("cors");  // Importez le package cors
const sequelize = require("./src/config/config");
const adventureRoutes = require("./src/routes/adventureRoutes");

const app = express();

// Activez CORS pour l'origine spécifique
app.use(cors({
  origin: 'http://localhost:3000'  // Remplacez par l'origine de votre frontend
}));

app.use(express.json());
app.use("/api", adventureRoutes);

const PORT = process.env.PORT || 3001;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Le serveur fonctionne sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });
