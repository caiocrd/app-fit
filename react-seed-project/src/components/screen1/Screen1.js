import React from 'react';
import TopBar from '../top-bar';
import './Screen1.scss';
import logo from '../../assets/images/logo.svg';

export default function Screen1(props) {
  return (
    <div className="wrapper">
      <TopBar />
      <div className={"content"}>
        <img src={logo} className="app-logo" alt="logo" />
        <p>Screen #1</p>
      </div>
    </div>
  );
}