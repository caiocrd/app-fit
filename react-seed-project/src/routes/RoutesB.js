import React from 'react'
import { Switch, HashRouter } from 'react-router-dom'
import RouteWrapper from './RouteWrapper'
import Home from '../components/home'
import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'
import Login from '../components/login'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <RouteWrapper path='/' isPrivate={true} exact component={ Home } />
        <RouteWrapper path='/screen1' isPrivate={true} component={ Screen1 } />
        <RouteWrapper path='/screen2' isPrivate={true} component={ Screen2 } />

        <RouteWrapper path='/login' isPrivate={false} exact component={ Login } />
      </Switch>
    </HashRouter>
  )
}