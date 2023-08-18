import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import configureMockStore from 'redux-mock-store';
import tasksReducer from './reducers/taskSlice';
import store from './store';

const mockStore = configureMockStore([]);
import { createStore } from 'redux';
import taskReducer, {
  addTask,
  deleteTask,
  toggleCompleted,
  editTask,
  toggleFilter,
} from './reducers/taskSlice';






/** @type {import('jest').Config} */
import React from 'react';

import { Provider } from 'react-redux';

import { useDispatch,useSelector } from 'react-redux';















// describe('Task Reducer', () => {
//   let store;

//   beforeEach(() => {
//     store = createStore(taskReducer);
//   });

//   test('should add a new task', () => {
//     const task = 'New Task';
//     store.dispatch(addTask(task));

//     const { tasks } = store.getState();
//     expect(tasks.length).toBe(2); // Initial task + newly added task
//     expect(tasks[1].task).toBe(task);
//     expect(tasks[1].completed).toBe(false);
//   });

//   test('should delete a task', () => {
//     const taskId = store.getState().tasks[0].id;
//     store.dispatch(deleteTask(taskId));

//     const { tasks } = store.getState();
//     expect(tasks.length).toBe(0); // All tasks should be deleted
//   });

//   test('should toggle a task as completed', () => {
//     const taskId = store.getState().tasks[0].id;
//     store.dispatch(toggleCompleted(taskId));

//     const { tasks } = store.getState();
//     expect(tasks[0].completed).toBe(true);
//   });

//   test('should edit a task', () => {
//     const taskId = store.getState().tasks[0].id;
//     const updatedTask = {
//       id: taskId,
//       title: 'Updated Task',
//       content: 'Updated Content',
//     };
//     store.dispatch(editTask(updatedTask));

//     const { tasks } = store.getState();
//     expect(tasks[0].title).toBe(updatedTask.title);
//     expect(tasks[0].content).toBe(updatedTask.content);
//   });

//   test('should toggle the filter', () => {
//     store.dispatch(toggleFilter());

//     const { filter } = store.getState();
//     expect(filter).toBe(true);

//     store.dispatch(toggleFilter());

//     const { filter: newFilter } = store.getState();
//     expect(newFilter).toBe(false);
//   });
// });



// In this test suite, we're using the redux package to create a store and dispatch 
// actions to the taskReducer (created with createSlice from @reduxjs/toolkit). We're testing 
// the behavior and state changes for each action defined in the reducer.

// The test cases covered here include:

// Adding a new task and verifying it is added correctly.
// Deleting a task and ensuring it is removed from the state.
// Toggling the completed status of a task and checking if it is updated.
// Editing a task and confirming that the changes are applied.
// Toggling the filter and verifying that the filter state is toggled correctly.












// describe('Store Configuration', () => {
//   test('should configure the store correctly', () => {
//     const initialState = { tasks: { tasks: [], filter: false } };
//     const expectedActions = [];
//     const expectedState = { tasks: { tasks: [], filter: false } };

//     const store = mockStore(initialState);
//     store.replaceReducer(tasksReducer);

//     const actions = store.getActions();
//     const state = store.getState();
//     console.log(state,expectedState)
//     expect(actions).toEqual(expectedActions);
//     expect(state).toEqual(expectedState);
//   });
// });



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


















// import TodoForm from './components/TodoForm';

// // Mocking the useDispatch hook
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(),
// }));

// // Mocking the addTask action creator
// jest.mock('./reducers/taskSlice', () => ({
//   addTask: jest.fn(),
// }));

// describe('TodoForm', () => {
//   beforeEach(() => {
//     render(
//       <Provider store={store}>
//         <TodoForm />
//       </Provider>
//     );
//   });

//   test('renders input and submit button', () => {
//     const inputElement = screen.getByRole('textbox');
//     const submitButton = screen.getByRole('button', { name: 'Add Todo' });

//     expect(inputElement).toBeInTheDocument();
//     expect(submitButton).toBeInTheDocument();
//   });

//   test('dispatches addTask action when form is submitted', () => {
//     const dispatchMock = jest.fn();
//     useDispatch.mockReturnValue(dispatchMock);

//     const inputElement = screen.getByRole('textbox');
//     const submitButton = screen.getByRole('button', { type: "submit" });

//     fireEvent.change(inputElement, { target: { value: 'New Task' } });
//     fireEvent.click(submitButton);

//     expect(dispatchMock).toHaveBeenCalledWith(addTask('New Task'));
//   });

//   test('clears the input field after form submission', () => {
//     useDispatch.mockReturnValue(jest.fn());

//     const inputElement = screen.getByRole('textbox');
//     const submitButton = screen.getByRole('button', { name: 'Add Todo' });

//     fireEvent.change(inputElement, { target: { value: 'New Task' } });
//     fireEvent.click(submitButton);

//     expect(inputElement.value).toEqual('');
//   });

//   test('does not dispatch addTask action if input is empty', () => {
//     const dispatchMock = jest.fn();
//     useDispatch.mockReturnValue(dispatchMock);

//     const submitButton = screen.getByRole('button', { name: 'Add Todo' });

//     fireEvent.click(submitButton);

//     expect(dispatchMock).not.toHaveBeenCalled();
//   });
// });








// import TodoItems from './components/TodoItems';

// // Mocking the useDispatch hook
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(),
// }));

// // Mocking the deleteTask, editTask, and toggleCompleted action creators
// jest.mock('./reducers/taskSlice', () => ({
//   deleteTask: jest.fn(),
//   editTask: jest.fn(),
//   toggleCompleted: jest.fn(),
// }));

// describe('TodoItems', () => {
//   const todo = {
//     id: 1,
//     task: 'Example Task',
//     completed: false,
//   };

//   beforeEach(() => {
//     render(
//       <Provider store={createStore(() => {})}>
//         <TodoItems todo={todo} />
//       </Provider>
//     );
//   });

//   test('renders task text and buttons', () => {
//     const taskText = screen.getByText('Example Task');
//     const editButton = screen.getByRole('button', { name: 'Edit' });
//     const deleteButton = screen.getByRole('button', { name: 'Delete' });

//     expect(taskText).toBeInTheDocument();
//     expect(editButton).toBeInTheDocument();
//     expect(deleteButton).toBeInTheDocument();
//   });

  

//   test('switches to edit mode when edit button is clicked', () => {
//     useDispatch.mockReturnValue(jest.fn());

//     const editButton = screen.getByRole('button', { name: 'Edit' });

//     fireEvent.click(editButton);

//     const saveButton = screen.getByRole('button', { name: 'Save' });
//     const inputElement = screen.getByRole('textbox', { value: 'Example Task' });

//     expect(saveButton).toBeInTheDocument();
//     expect(inputElement).toBeInTheDocument();
//   });

//   test('dispatches editTask action when save button is clicked', () => {
//     const dispatchMock = jest.fn();
//     useDispatch.mockReturnValue(dispatchMock);

//     const editButton = screen.getByRole('button', { name: 'Edit' });
//     fireEvent.click(editButton);

//     const saveButton = screen.getByRole('button', { name: 'Save' });
//     const inputElement = screen.getByRole('textbox', { value: 'Example Task' });
//     fireEvent.change(inputElement, { target: { value: 'Edited Task' } });

//     fireEvent.click(saveButton);

//     expect(dispatchMock).toHaveBeenCalledWith(editTask(1, 'Edited Task'));
//   });
// });


// '''

// In this test suite, were using the @testing-library/react package to render and interact with the 
// TodoItems component. Were also mocking the useDispatch hook and the deleteTask, editTask, and 
// toggleCompleted action creators from the taskSlice reducer.

// The test cases covered here include:

// Checking if the task text and buttons are rendered.
// Testing whether the deleteTask action is dispatched when the delete button is clicked.
// Verifying that the toggleCompleted action is dispatched when the checkbox is clicked.
// Ensuring that the component switches to edit mode when the edit button is clicked.
// Testing whether the editTask action is dispatched when the save button is clicked, and the input value is changed.


// '''



















// import Filter from './components/Filter';

// // Mocking the useSelector and useDispatch hooks
// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// // Mocking the toggleFilter action creator
// jest.mock('./reducers/taskSlice', () => ({
//   toggleFilter: jest.fn(),
// }));

// describe('Filter', () => {
//   beforeEach(() => {
//     useSelector.mockReturnValue(false);
//     useDispatch.mockReturnValue(jest.fn());

//     render(
//       <Provider store={store}>
//         <Filter />
//       </Provider>
//     );
//   });

//   test('renders the filter button', () => {
//     const filterButton = screen.getByRole('button');

//     expect(filterButton).toBeInTheDocument();
//     expect(filterButton).toHaveTextContent('Show Completed Tasks');
//   });

// });



// In this test suite, we're using the @testing-library/react package to render 
// and interact with the Filter component. We're also mocking the useSelector and 
// useDispatch hooks to return mock data for the filter state and the dispatch function. 
// Additionally, we're mocking the toggleFilter action creator from the taskSlice reducer.

// The test cases covered here include:

// Checking if the filter button is rendered and has the correct initial text.
// Testing whether the toggleFilter action is dispatched when the filter button is clicked.
// Verifying that the button text changes to "Show All Tasks" when the filter state is true.






