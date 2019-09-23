import React, { useState } from 'react';

import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        className='input'
        placeholder='Add Todo'
        onChange={handleChange}
      />
      <button type='submit' className='btn btn-medium'>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
