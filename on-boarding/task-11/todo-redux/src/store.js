import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/taskSlice';

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;