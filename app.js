const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
  });

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo con éxito en puerto ${port}`));


