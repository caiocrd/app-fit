import React from 'react';
import { Link } from "react-router-dom";
import './top-bar-view.scss';

export default function TopBarView({ onLogout }) {
  return (
    <div className={"top-bar"}>
      <Link to='/' >Home</Link>
      <Link to='/screen1' >Screen 1</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}