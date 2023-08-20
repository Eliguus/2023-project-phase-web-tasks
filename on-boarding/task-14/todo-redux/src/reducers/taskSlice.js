import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'


const initialState= {
    tasks: [{
        id: uuidv4(),
        task: "This is the first task.",
        completed: false,
    }],
    filter: false,
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask= {
                id: uuidv4(),
                task: action.payload,
                completed: false,
            };
            state.tasks.push(newTask);
            }, 
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);

        },
        toggleCompleted: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.content = action.payload.content;
            }
        }, 
        toggleFilter: (state) => {
            state.filter = !state.filter;
        }

            

    }
})

export const { addTask, deleteTask, toggleCompleted, editTask, toggleFilter } = taskSlice.actions;

export default taskSlice.reducer;