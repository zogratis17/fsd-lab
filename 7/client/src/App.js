import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos').then((response) => setTodos(response.data));
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newtodo) return;
    const response = await axios.post('http://localhost:5000/api/todos', { content: newtodo });
    setTodos([...todos, response.data]);
    setNewtodo('');
  };

  const handleDeleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
