import React, { useState } from 'react'
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { complete, remove } from './slices';



const App = () => {
  
  const todos = useSelector(state => state.data.todos )
  const dispatch = useDispatch();

  
  const deleteTodo = (index) => {
    dispatch(remove(index))
  }

  const completeTodo = (index) => {
    dispatch(complete(index))
  }

  const renderTodos = () => {
    const listTodos = todos.map((item, index) => {
      return (
        <Todo
          key={item.id}
          item={item}
          checkboxAction={() => completeTodo(index)}
          buttonAction={() => deleteTodo(index)}
        />
      );
    });

    return (
      <div className="todos">
        <h2>Mes tâches</h2>
        {listTodos}
      </div >
    );
  }

  return (
    <div className="App">
      <header>
        <span role="img" aria-label="">🧠</span>
        <h1>Taskinator</h1>
        <span role="img" aria-label="">🤖</span>
      </header>
      <div className="container">
      <AddTodo/>
      {renderTodos()}
      </div>
    </div>
  );
}

export default App