import React from 'react';
//import { Link } from "react-router-dom";
import './top-bar.scss';

export default function TopBar() {
  return (
    <div className={"top-bar"}>
      <a href='/#/' >Home</a>
      <a href='/#/lorem' >Lorem</a>
      <a href='/#/ipsum'>Ipsum</a>
    </div>
  )
}