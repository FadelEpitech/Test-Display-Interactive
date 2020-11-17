import React, { Component } from 'react'
import './App.css'
import logo from './LogoDisplay.svg';
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="memory">
        <HallOfFame entries={FAKE_HOF} />
      </div>
      <TodoList />
    </div>
  );

}

export default App