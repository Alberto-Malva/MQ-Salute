const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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
const mongoose = require('mongoose');

// ... (le altre variabili che hai definito)

mongoose.connect('mongodb+srv://medquestio:<MQmongodb>@cluster0.xy1w4uu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // siamo connessi!
});
const routes = require('./routes/routes');

// ... (le altre configurazioni del server)

app.use('/api', routes);




