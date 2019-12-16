import React from 'react';
import TopBar from '../top-bar';
import './app.scss';
import logo from '../../assets/images/logo.svg';

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <div className={"content"}>
        <img src={logo} className="app-logo" alt="logo" />
        <p>I'm like a blue rose</p>
      </div>
    </div>
  );
}