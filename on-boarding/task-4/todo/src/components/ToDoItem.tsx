import React, { useState } from 'react';
import "./ToDoItem.css";

interface Todo {
    id: string;
    task: string;
    completed: boolean;
  }

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onEdit: (id: string, task: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggleComplete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, task);
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <li className='todo-item'>
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
          </span>
          <button className="editbutton" onClick={handleEdit}>Edit</button>
          <button className="deletebutton" onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <input type="text" value={task} onChange={handleInputChange} />
          <button className="savebutton" onClick={handleSave}>Save</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;