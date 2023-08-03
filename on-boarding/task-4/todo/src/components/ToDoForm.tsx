import React, { useState } from 'react';
import "./ToDoForm.css";

interface TodoFormProps {
  onAdd: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() === '') {
      return;
    }
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input type="text" value={task} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;