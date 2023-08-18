import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/taskSlice";
// import "./ToDoForm.css";

// TodoForm component for adding a new task
const TodoForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    // Handler for updating the task input
    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    // Handler for submitting the form and adding a new task
    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
            return;
        }
        dispatch(addTask(task));
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input type="text" value={task} onChange={handleInputChange} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;