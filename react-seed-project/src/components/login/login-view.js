import React from 'react';
import './login-view.scss';

export default function LoginView({ onLogin }) {
  return (
    <div className="wrapper">
      <div className={"content"}>
        <h2>Login</h2>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}