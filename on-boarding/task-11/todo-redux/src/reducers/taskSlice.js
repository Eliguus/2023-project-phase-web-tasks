import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// Define the initial state of the tasks
const initialState = {
    tasks: [{
        id: uuidv4(),
        title: "First Note",
        content: "some some some.",
    }]
};

// Create a new slice for tasks
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        // Reducer function to add a new task
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(),
                title: action.payload.title,
                content: action.payload.content,
            };
            state.tasks.push(newTask);
        }, 

        // Reducer function to delete a task
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },

        // Reducer function to edit a task
        editTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.content = action.payload.content;
            }
        }
    }
});

// Extract the action creators from the slice
export const { addTask, deleteTask, editTask } = taskSlice.actions;

// Export the reducer function
export default taskSlice.reducer;