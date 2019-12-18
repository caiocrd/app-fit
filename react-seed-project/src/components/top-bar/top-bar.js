import React from 'react';
import { Link } from "react-router-dom";
import './top-bar.scss';

export default function TopBar() {
  return (
    <div className={"top-bar"}>
      <Link to='/' >Home</Link>
      <Link to='/screen1' >Screen 1</Link>
      <Link to='/screen2'>Screen 2</Link>
    </div>
  )
}