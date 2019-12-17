import React from 'react';
import TopBar from '../top-bar';
import './other-component.scss';
import logo from '../../assets/images/logo.svg';

export default function OtherComponent() {
  return (
    <div className="wrapper">
      <TopBar />
      <div className={"content"}>
        <img src={logo} className="app-logo" alt="logo" />
        <p>I'm other component!</p>
      </div>
    </div>
  );
}