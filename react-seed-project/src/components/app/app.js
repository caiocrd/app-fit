import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'

import HelloComponent from '../hello-component';
import OtherComponent from '../other-component';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={ HelloComponent } />
        <Route path='/lorem' component={ HelloComponent } />
        <Route path='/ipsum' component={ OtherComponent } />
      </Switch>
    </HashRouter>
  );
}