import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';

// Mocking the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('TodoList', () => {
  const mockTasks = [
    { id: 1, task: 'Task 1', completed: false },
    { id: 2, task: 'Task 2', completed: true },
    { id: 3, task: 'Task 3', completed: false },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue({ tasks: mockTasks, filter: false });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  test('renders all tasks when filter is disabled', () => {
    const taskItems = screen.getAllByRole('listitem');

    expect(taskItems.length).toBe(mockTasks.length);
    expect(taskItems[1]).toHaveTextContent('Task 1');
    expect(taskItems[2]).toHaveTextContent('Task 2');
    expect(taskItems[3]).toHaveTextContent('Task 3');
  });

  test('renders completed tasks only when filter is enabled', () => {
    useSelector.mockReturnValue({ tasks: mockTasks, filter: true });

    const taskItems = screen.getAllByRole('listitem');

    expect(taskItems.length).toBe(1);
    expect(taskItems[1]).toHaveTextContent('Task 2');
  });
});