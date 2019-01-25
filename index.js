const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const videoRoutes = require('./routes/videoRoutes');

const keys = require('./config/keys');
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('mongodb runs'));

const app = express();

app.use(bodyParser.json());

videoRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}!!`));
