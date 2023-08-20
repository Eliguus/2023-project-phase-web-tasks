import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import { toggleFilter } from '../reducers/taskSlice';
import { toHaveTextContent, toBeInTheDocument} from  "@testing-library/jest-dom"

// Mocking the useSelector and useDispatch hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mocking the toggleFilter action creator
jest.mock('../reducers/taskSlice', () => ({
  toggleFilter: jest.fn(),
}));

describe('Filter', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(false);
    useDispatch.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
  });

  test('renders the filter button', () => {
    const filterButton = screen.getByRole('button');

    expect(filterButton).toBeInTheDocument();
    expect(filterButton).toHaveTextContent('Show Completed Tasks');
  });

  test('dispatches toggleFilter action when the filter button is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const filterButton = screen.getByRole('button');

    fireEvent.click(filterButton);

    expect(dispatchMock).toHaveBeenCalledWith(toggleFilter());
  });

  test('displays "Show All Tasks" when the filter state is true', () => {
    useSelector.mockReturnValue(true);

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    console.log(screen.queryAllByRole('button',{ className: 'filterbutton' }))
    const filterButton = screen.queryAllByRole('button',{ className: 'filterbutton' });
    
    expect(filterButton[1]).queryAllByText('Show All Tasks');
  });
});



// In this test suite, we're using the @testing-library/react package to render 
// and interact with the Filter component. We're also mocking the useSelector and 
// useDispatch hooks to return mock data for the filter state and the dispatch function. 
// Additionally, we're mocking the toggleFilter action creator from the taskSlice reducer.

// The test cases covered here include:

// Checking if the filter button is rendered and has the correct initial text.
// Testing whether the toggleFilter action is dispatched when the filter button is clicked.
// Verifying that the button text changes to "Show All Tasks" when the filter state is true.