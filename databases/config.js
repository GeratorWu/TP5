const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
        // URI de connexion à MongoDB
        const uri = 'mongodb://localhost:27017/admin';

        // Options de connexion
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Connexion à MongoDB
        await mongoose.connect(uri, options);

        console.log('Connexion à MongoDB établie avec succès');
    } catch (error) {
        console.error('Erreur lors de la connexion à MongoDB:', error);
    }
}

module.exports = connectToMongoDB;
