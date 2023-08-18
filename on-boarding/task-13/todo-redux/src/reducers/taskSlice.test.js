import { createStore } from 'redux';
import taskReducer, {
  addTask,
  deleteTask,
  toggleCompleted,
  editTask,
  toggleFilter,
} from './taskSlice';






describe('Task Reducer', () => {
  let store;

  beforeEach(() => {
    store = createStore(taskReducer);
  });

  test('should add a new task', () => {
    const task = 'New Task';
    store.dispatch(addTask(task));

    const { tasks } = store.getState();
    expect(tasks.length).toBe(2); // Initial task + newly added task
    expect(tasks[1].task).toBe(task);
    expect(tasks[1].completed).toBe(false);
  });

  test('should delete a task', () => {
    const taskId = store.getState().tasks[0].id;
    store.dispatch(deleteTask(taskId));

    const { tasks } = store.getState();
    expect(tasks.length).toBe(0); // All tasks should be deleted
  });

  test('should toggle a task as completed', () => {
    const taskId = store.getState().tasks[0].id;
    store.dispatch(toggleCompleted(taskId));

    const { tasks } = store.getState();
    expect(tasks[0].completed).toBe(true);
  });

  test('should edit a task', () => {
    const taskId = store.getState().tasks[0].id;
    const updatedTask = {
      id: taskId,
      title: 'Updated Task',
      content: 'Updated Content',
    };
    store.dispatch(editTask(updatedTask));

    const { tasks } = store.getState();
    expect(tasks[0].title).toBe(updatedTask.title);
    expect(tasks[0].content).toBe(updatedTask.content);
  });

  test('should toggle the filter', () => {
    store.dispatch(toggleFilter());

    const { filter } = store.getState();
    expect(filter).toBe(true);

    store.dispatch(toggleFilter());

    const { filter: newFilter } = store.getState();
    expect(newFilter).toBe(false);
  });
});



// In this test suite, we're using the redux package to create a store and dispatch 
// actions to the taskReducer (created with createSlice from @reduxjs/toolkit). We're testing 
// the behavior and state changes for each action defined in the reducer.

// The test cases covered here include:

// Adding a new task and verifying it is added correctly.
// Deleting a task and ensuring it is removed from the state.
// Toggling the completed status of a task and checking if it is updated.
// Editing a task and confirming that the changes are applied.
// Toggling the filter and verifying that the filter state is toggled correctly.