import React from 'react';
import { Link } from "react-router-dom";
import './TopBar.scss';

export default function TopBar({ onLogout }) {
  return (
    <div className={"top-bar"}>
      <Link to='/' >Home</Link>
      <Link to='/screen1' >Screen 1</Link>
      <Link to='/screen2'>Screen 2</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}