//importaciones
const express = require('express');
const path = require('path');
//agregarlo a variable
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../vista/index.html'));
})

app.listen(port);
console.log('Servidor abierto en el puierto', port);