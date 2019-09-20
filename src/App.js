import React, { useState } from 'react';

import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodo] = useState([
    {
      text: 'Learn React-Hooks',
      isCompleted: false
    },
    {
      text: 'Build a portfolio',
      isCompleted: false
    },
    {
      text: 'Get a job',
      isCompleted: false
    }
  ]);

  return (
    <div className='App'>
      <div className='todos'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
