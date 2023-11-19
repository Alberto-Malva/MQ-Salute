const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
const path = require('path');

// ... (le altre variabili che hai definito)

app.use(express.static(path.join(__dirname, '../frontend')));

// ... (le altre rotte che hai definito)
const bodyParser = require('body-parser');

// ... (le altre variabili che hai definito)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ... (le altre rotte e middleware che hai definito)

// La dichiarazione di mongoose va qui
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mqapptrial:J09DqV6uXFRBOuzC@cluster0.xy1w4uu.mongodb.net/?retryWrites=true&w=majority', {
  // le opzioni deprecate sono state rimosse
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// ... (le altre configurazioni del server)

const routes = require('./routes/routes'); // Assicurati che questo percorso sia corretto
app.use('/api', routes);