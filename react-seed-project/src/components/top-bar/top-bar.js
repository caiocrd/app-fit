import React from 'react';
//import { Link } from "react-router-dom";
import './top-bar.scss';

export default function TopBar() {
  return (
    <div className={"top-bar"}>
      <a href='/#/' >Home</a>
      <a href='/#/screen1' >Screen 1</a>
      <a href='/#/screen2'>Screen 2</a>
    </div>
  )
}