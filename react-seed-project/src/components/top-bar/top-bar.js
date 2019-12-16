import React from 'react';
//import { Link } from "react-router-dom";
import './top-bar.scss';

export default function TopBar() {
  return (
    <div className={"top-bar"}>
      <a to={`/balthazar`}>Balthazar</a>
      <a to={`/melchior`}>Melchior</a>
      <a to={`/gaspar`}>Gaspar</a>
    </div>
  )
}