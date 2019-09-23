import React, { useState } from 'react';

import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
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

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <div className='todos'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
