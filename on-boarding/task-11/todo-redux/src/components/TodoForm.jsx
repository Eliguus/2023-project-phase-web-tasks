import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/taskSlice";
import "./ToDoForm.css";

// TodoForm component for adding a new task
const TodoForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({ title: '', content: '' });

    // Handler for updating the title of the task
    const handleTitleChange = (event) => {
        setTask({ ...task, title: event.target.value });
    };

    // Handler for updating the content of the task
    const handleContentChange = (event) => {
        setTask({ ...task, content: event.target.value });
    };

    // Handler for submitting the form and adding a new task
    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.title.trim() === '' && task.content.trim() === '') {
            return;
        }
        dispatch(addTask(task));
        setTask({ title: '', content: '' });
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form container'>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" value={task.title} onChange={handleTitleChange} className='input' />
            </div>
            <div>
                <label htmlFor="body">Note:</label>
                <textarea type="text" value={task.content} onChange={handleContentChange} className='textarea' />
            </div>
            <button type="submit">Add Note</button>
        </form>
    )
}

export default TodoForm;