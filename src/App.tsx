import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import TodoProducer from './components/TodoProducer';

function App() {
  return (
    <div className='App'>
      <TodoProducer />
      <TodoList />
    </div>
  );
}

export default App;
