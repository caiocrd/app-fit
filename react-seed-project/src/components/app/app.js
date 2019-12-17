import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from '../home';
import Screen1 from '../screen1';
import Screen2 from '../screen2';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/screen1' component={ Screen1 } />
        <Route path='/screen2' component={ Screen2 } />
      </Switch>
    </HashRouter>
  );
}