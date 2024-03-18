//importaciones
const express = require('express');
const path = require('path');
//agregarlo a variable
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../vista')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../vista', 'index.html'));
});


app.use(express.static(path.join(__dirname, '/../vista')));

app.get('/createAccount', (req, res) => {
    res.sendFile(path.join(__dirname, '/../vista', 'createAccount.html'));
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});