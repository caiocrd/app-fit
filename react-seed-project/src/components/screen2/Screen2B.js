import React from 'react';
import TopBar from '../top-bar';
import './Screen2.scss';
import logo from '../../assets/images/logo.svg';

export default function Screen2() {
  return (
    <div className="wrapper">
      <TopBar />
      <div className={"content"}>
        <img src={logo} className="app-logo" alt="logo" />
        <p>Screen #2</p>
      </div>
    </div>
  );
}