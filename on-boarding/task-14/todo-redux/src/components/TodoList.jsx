import React from 'react';
import TodoItems from './TodoItems';
import { useSelector } from "react-redux";

// TodoList component for rendering the list of todos
const TodoList = () => {
    // Retrieve the todos from the Redux store using the useSelector hook
    const todos = useSelector((state) => {
        console.log(state.tasks.filter);
        if (state.tasks.filter) {
            // If the filter is enabled, return only the completed tasks
            return state.tasks.tasks.filter((task) => task.completed);
        }
        // If the filter is disabled, return all tasks
        return state.tasks.tasks;
    });

    console.log(todos);

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <TodoItems
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </>
    );
}

export default TodoList;