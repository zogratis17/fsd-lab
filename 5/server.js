const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/namesdb', { useNewUrlParser: true, useUnifiedTopology: true });

const nameSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});
const Name = mongoose.model('Name', nameSchema);

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Add name
app.post('/addname', async (req, res) => {
  await Name.create({ firstname: req.body.firstname, lastname: req.body.lastname });
  res.redirect('/');
});

// View names
app.get('/view', async (req, res) => {
  const names = await Name.find();
  res.send(`<pre>${JSON.stringify(names, null, 2)}</pre>`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
