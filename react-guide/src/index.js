import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//   <h1>Hello World!</h1>,
//   document.getElementById('root')
// );

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    {getGreeting(user)}
  </h1>
);


ReactDOM.render(
  element,
  document.getElementById('root')
);