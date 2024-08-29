const express = require('express');
"const cors = require('cors');"
const db = require('./models'); // Importation des modèles

const app = express(); // Initialise l'application Express
"app.use(cors());"
app.use(express.json()); // Middleware pour parser les requêtes JSON

// Routes définies avant l'utilisation de l'application
app.use('/adventures', require('./routes/adventureRoutes'));

// Synchronisation de la base de données
db.sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch(error => console.error('Unable to synchronize database:', error));

// Démarrage du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
