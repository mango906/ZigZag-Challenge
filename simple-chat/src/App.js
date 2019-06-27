import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <div className="App">{/* <Main /> */}</div>

      <Route exact path="/" component={Main} />
      <Route path="/chat/:id" component={Chat} />
    </BrowserRouter>
  );
}

export default App;
