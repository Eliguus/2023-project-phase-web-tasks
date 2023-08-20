import configureMockStore from 'redux-mock-store';
import tasksReducer from './reducers/taskSlice';
import store from './store';

const mockStore = configureMockStore([]);

describe('Store Configuration', () => {
  test('should configure the store correctly', () => {
    const initialState = { tasks: { tasks: [], filter: false } };
    const expectedActions = [];
    const expectedState = { tasks: [] };

    const store = mockStore(initialState);
    store.replaceReducer(tasksReducer);

    const actions = store.getActions();
    const state = store.getState();

    expect(actions).toEqual(expectedActions);
    expect(state).toEqual(expectedState);
  });
});


// In this test, we're using the redux-mock-store library to create a mock store 
// with the initial state. We then replace the reducer with the tasksReducer from your code.

// The test verifies that the store is configured correctly by comparing the dispatched 
// actions (actions) and the resulting state (state) with the expected values 
// (expectedActions and expectedState, respectively).