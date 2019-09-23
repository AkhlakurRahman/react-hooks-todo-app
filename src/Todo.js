import React from 'react';

import './Todo.css';

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div className='todo'>
      <div
        onClick={() => completeTodo(index)}
        style={{
          textDecoration: todo.isCompleted ? 'line-through' : '',
          cursor: 'pointer'
        }}
      >
        {todo.text}
      </div>
      <button className='delete-button' onClick={() => deleteTodo(index)}>
        <i className='fas fa-trash-alt'></i>
      </button>
    </div>
  );
};

export default Todo;
