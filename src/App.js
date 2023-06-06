import React, { useState } from 'react'
import './App.scss';
import { Todo } from './components/Todo';
import { Button } from './components/Button';
import AddTodo from './components/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { complete, remove } from './slices';

const App = () => {
  const todos = useSelector(state => state.data.todos )
  const dispatch = useDispatch();

  return (
    <div className="App">
    </div>
  );
}

export default App;
