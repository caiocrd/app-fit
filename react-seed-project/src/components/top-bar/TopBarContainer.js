import React from 'react'
import TopBar from './TopBar.js'
import { logout } from '../../utils/auth'

export default function TopBarContainer() {
  return(
    <TopBar onLogout={logout}/>
  )
}