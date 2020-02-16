import React from 'react';
import TopBar from '../top-bar';
import './home.scss';
import logo from '../../assets/images/logo.svg';

export default function Home() {
  return (
    <div className="wrapper">
      <TopBar />
      <div className={"content"}>
        <img src={logo} className="app-logo" alt="logo" />
        <p>Home</p>
      </div>
    </div>
  );
}