import React from 'react'
import LoginView from './LoginView.js'
import { login } from '../../utils/auth'

export default function LoginContainer() {
  return(
    <LoginView onLogin={login}/>
  )
}