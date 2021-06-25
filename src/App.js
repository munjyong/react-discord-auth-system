import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Activate,
  Dashboard,
  Landing
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/activate'>
          <Activate />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/home'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
