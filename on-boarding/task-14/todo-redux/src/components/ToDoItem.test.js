import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { useDispatch } from 'react-redux';
import TodoItems from './TodoItems';
import { deleteTask, editTask, toggleCompleted } from '../reducers/taskSlice';

// Mocking the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

// Mocking the deleteTask, editTask, and toggleCompleted action creators
jest.mock('../reducers/taskSlice', () => ({
  deleteTask: jest.fn(),
  editTask: jest.fn(),
  toggleCompleted: jest.fn(),
}));

describe('TodoItems', () => {
  const todo = {
    id: 1,
    task: 'Example Task',
    completed: false,
  };

  beforeEach(() => {
    render(
      <Provider store={createStore(() => {})}>
        <TodoItems todo={todo} />
      </Provider>
    );
  });

  test('renders task text and buttons', () => {
    const taskText = screen.getByText('Example Task');
    const editButton = screen.getByRole('button', { name: 'Edit' });
    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    expect(taskText).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test('dispatches deleteTask action when delete button is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    fireEvent.click(deleteButton);

    expect(dispatchMock).toHaveBeenCalledWith(deleteTask(1));
  });

  test('dispatches toggleCompleted action when checkbox is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(dispatchMock).toHaveBeenCalledWith(toggleCompleted(1));
  });

  test('switches to edit mode when edit button is clicked', () => {
    useDispatch.mockReturnValue(jest.fn());

    const editButton = screen.getByRole('button', { name: 'Edit' });

    fireEvent.click(editButton);

    const saveButton = screen.getByRole('button', { name: 'Save' });
    const inputElement = screen.getByRole('textbox', { value: 'Example Task' });

    expect(saveButton).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('dispatches editTask action when save button is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const editButton = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(editButton);

    const saveButton = screen.getByRole('button', { name: 'Save' });
    const inputElement = screen.getByRole('textbox', { value: 'Example Task' });
    fireEvent.change(inputElement, { target: { value: 'Edited Task' } });

    fireEvent.click(saveButton);

    expect(dispatchMock).toHaveBeenCalledWith(editTask(1, 'Edited Task'));
  });
});


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