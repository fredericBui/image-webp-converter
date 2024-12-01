const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Stockage temporaire des fichiers

// Middleware pour servir les fichiers statiques (le formulaire HTML)
app.use(express.static('public'));

// Endpoint pour l'upload et la conversion
app.post('/convert', upload.single('image'), async (req, res) => {
    const filePath = req.file.path; // Chemin temporaire du fichier uploadé
    const outputPath = `uploads/${req.file.filename}.webp`;

    try {
        // Conversion en WebP
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputPath);

        // Téléchargement du fichier converti
        res.download(outputPath, 'image-convertie.webp', (err) => {
            // Suppression des fichiers temporaires après le téléchargement
            fs.unlink(filePath, () => {});
            fs.unlink(outputPath, () => {});
        });
    } catch (error) {
        res.status(500).send(`
            <h1>Erreur lors de la conversion</h1>
            <p>${error.message}</p>
            <a href="/">Revenir au formulaire</a>
        `);
        // Nettoyage des fichiers en cas d'erreur
        fs.unlink(filePath, () => {});
    }
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
