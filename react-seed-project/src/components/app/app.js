import React from 'react';
import logo from '../../assets/images/logo.svg';
import './app.scss';

export default function App() {
  return (
    <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <p>I'm like a blue rose</p>
    </div>
  );
}
