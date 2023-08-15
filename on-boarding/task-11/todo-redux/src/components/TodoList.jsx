import React from 'react';
import TodoItems from './TodoItems';
import { useSelector } from "react-redux";

// TodoList component responsible for rendering the list of todos
const TodoList = () => {
    // Access the todos from the Redux store using useSelector
    const todos = useSelector((state) => state.tasks.tasks);

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
    )
}

export default TodoList;