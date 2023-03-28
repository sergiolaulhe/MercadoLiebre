// ***** Require's ***** //
const express = require('express');
const path = require('path');

// ***** Express execution ***** //
const app = express();

// Accediendo a recursos estaticos

const publicFolderPath = path.resolve(__dirname, 'public');
app.use(express.static(publicFolderPath));


// Levantar servidor con Express
app.listen(3001, () => console.log('Servidor en linea en puerto 3200'));

app.get('/', (req, res) =>  {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/create', (req, res) =>  {
    res.sendFile(path.join(__dirname, '/views/product-create-form.html'));
});
app.get('/register', (req, res) =>  {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login', (req, res) =>  {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});