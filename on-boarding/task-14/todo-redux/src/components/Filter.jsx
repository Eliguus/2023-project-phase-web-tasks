import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleFilter } from '../reducers/taskSlice';
// import './ToDoItem.css';

// Filter component to toggle the task filter
const Filter = () => {
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  console.log(filter);

  return (
    <div>
      <button
        onClick={() => dispatch(toggleFilter())}
        className="filterbutton"
      >
        {filter ? 'Show All Tasks' : 'Show Completed Tasks'}
      </button>
    </div>
  );
};

export default Filter;