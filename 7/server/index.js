const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

let todos = [];
fs.readFile('./todos.json', 'utf8', (err, data) => {
  if (!err) todos = JSON.parse(data);
});

app.use(cors());
app.use(express.json());

app.get('/api/todos', (req, res) => res.json(todos));
app.post('/api/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, content: req.body.content };
  todos.push(newTodo);
  fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
    if (err) console.log(err);
    res.json(newTodo);
  });
});
app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
  fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
    if (err) console.log(err);
    res.json(todos);
  });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
