import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, editTask, toggleCompleted } from '../reducers/taskSlice';
// import "./ToDoItem.css";

// TodoItems component for rendering individual todo items
const TodoItems = ({ todo }) => {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    // Handler for deleting a task
    const handleDelete = () => {
        dispatch(deleteTask(todo.id));
    }

    // Handler for toggling the completion status of a task
    const handleToggleComplete = () => {
        dispatch(toggleCompleted(todo.id));
    }

    // Handler for entering edit mode for a task
    const handleEdit = () => {
        setIsEditing(true);
    }

    // Handler for updating the task input
    const handleInputChange = (event) => {
        setTask(event.target.value);
    }

    // Handler for saving the edited task
    const handleSave = () => {
        dispatch(editTask(todo.id, task));
        setIsEditing(false);
    }

    return (
        <li className='todo-item'>
            {!isEditing ? (
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                    />
                    <span>
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
    )
}

export default TodoItems;
