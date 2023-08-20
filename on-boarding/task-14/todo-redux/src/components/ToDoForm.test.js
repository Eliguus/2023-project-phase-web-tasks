/** @type {import('jest').Config} */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store  from '../store';
import { useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import { addTask } from '../reducers/taskSlice';

// Mocking the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

// Mocking the addTask action creator
jest.mock('../reducers/taskSlice', () => ({
  addTask: jest.fn(),
}));

describe('TodoForm', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
  });

  test('renders input and submit button', () => {
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Add Todo' });

    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('dispatches addTask action when form is submitted', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith(addTask('New Task'));
  });

  test('clears the input field after form submission', () => {
    useDispatch.mockReturnValue(jest.fn());

    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(submitButton);

    expect(inputElement.value).toEqual('');
  });

  test('does not dispatch addTask action if input is empty', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const submitButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.click(submitButton);

    expect(dispatchMock).not.toHaveBeenCalled();
  });
});



// '''
// In this test suite, we are using 
// the @testing-library/react package to render and 
// interact with the TodoForm component. We are also 
// mocking the useDispatch hook and the addTask action 
// creator from the taskSlice reducer.

// The test cases covered here include:

// Checking if the input field and submit button are rendered.
// Testing whether the addTask action is dispatched when the form is submitted.
// Verifying that the input field is cleared after form submission.
// Ensuring that the addTask action is not dispatched if the input field is empty.

// '''