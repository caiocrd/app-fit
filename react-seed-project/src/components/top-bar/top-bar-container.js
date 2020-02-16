import React from 'react'
import TopBarView from './top-bar-view.js'
import { logout } from '../../utils/auth'

export default function TopBarContainer() {
  return(
    <TopBarView onLogout={logout}/>
  )
}