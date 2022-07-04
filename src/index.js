import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Joke from './components/JokeHandler';
import {Nav , Foot} from "./components/Bars"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    {/* <App /> */}
    <Joke />
    <Foot />
  </React.StrictMode>
);