import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import React,{ useState } from 'react';
import Filter from './components/Filter';
function App() {
  return (
    <div className='container'>
      <h1>Tick It</h1>
      <TodoForm/>
      <Filter/>
      <TodoList/>
    </div>
  );
}

export default App;
