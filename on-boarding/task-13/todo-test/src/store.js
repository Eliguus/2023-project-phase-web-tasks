import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/taskSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;