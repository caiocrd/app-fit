import React from 'react'
import Login from './Login.js'
import { login } from '../../utils/auth'

export default function LoginContainer() {
  return(
    <Login onLogin={login()}/>
  )
}