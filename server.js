import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

console.log("Importing Completed, Setting Directories..")
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

console.log("Scanning For MP3s in the music directory..")
app.get('/music', (req, res) => {
    const musicDir = path.join(__dirname, 'public', 'music');
    fs.readdir(musicDir, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        const musicFiles = files.filter(file => file.endsWith('.mp3'));
        res.json(musicFiles);
    });
});

app.listen(port, () => {
    console.log('Server Started Successfully @ Port ${port}')
    console.log(`Thanks To The Contributers!`);
});
