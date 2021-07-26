import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//   <h1>Hello World!</h1>,
//   document.getElementById('root')
// );

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);