import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import React from 'react';

function App() {

  return (
    <div className='container'>
      <h1>Note-ify</h1>
        <TodoForm/>
        <TodoList/>
    </div>
  );
}

export default App;
