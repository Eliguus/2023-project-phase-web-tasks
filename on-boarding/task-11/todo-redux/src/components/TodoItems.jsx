import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../reducers/taskSlice';
import "./ToDoItem.css";

// TodoItems component to display and edit a single todo item
const TodoItems = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo);

    // Handler for deleting a task
    const handleDelete = () => {
        dispatch(deleteTask(todo.id));
    }

    // Handler for enabling edit mode
    const handleEdit = () => {
        setIsEditing(true);
    }

    // Handler for updating the title of the task
    const handleTitleChange = (event) => {
        setTask({ ...task, title: event.target.value });
    };

    // Handler for updating the content of the task
    const handleContentChange = (event) => {
        setTask({ ...task, content: event.target.value });
    };

    // Handler for saving the edited task
    const handleSave = () => {
        dispatch(editTask(todo.id, task));
        setIsEditing(false);
    }

    return (
        <li className='todo-item card'>
            {!isEditing ? (
                <>
                    <span className='title'>
                        {task.title}
                    </span>
                    <p className='content'>
                        {task.content}
                    </p>
                    <button className="editbutton" onClick={handleEdit}>Edit</button>
                    <button className="deletebutton" onClick={handleDelete}>Delete</button>
                </>
            ) : (
                <>
                    <input type="text" value={task.title} onChange={handleTitleChange} />
                    <input type="text" value={task.content} onChange={handleContentChange} />
                    <button className="savebutton" onClick={handleSave}>Save</button>
                </>
            )}
        </li>
    )
}

export default TodoItems;