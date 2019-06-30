import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Chat from './components/Chat';
import ImageBigView from './components/Chat/ImageBigView';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/chat/:id" component={Chat} />
      <Route path="/imageBigView" component={ImageBigView} />
    </BrowserRouter>
  );
}

export default App;
