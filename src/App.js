import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Activate,
  Dashboard,
  Landing
} from './pages'

function App() {
  const [accessToken, setAccessToken] = useState("")
  console.log("🚀 | App | accessToken", accessToken)

  const authCode = new URLSearchParams(window.location.search).get('code')

  const getAuthResponse = async () => {
    let options = {
      url: 'https://discord.com/api/oauth2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'client_id': '858064642227044352',
        'client_secret': 'UE8bs8wJMMLWF6EZdPx9fuW3CS_lchb9',
        'grant_type': 'client_credentials',
        'code': authCode,
        'redirect_uri': 'http://localhost:3000/dashboard',
        'scope': 'identify email'
      })
    }
    
    await fetch('https://discord.com/api/oauth2/token', options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("🚀 | .then | response", response)
      setAccessToken(response.access_token)
      return response;
    });
  }

  if (authCode) {
    getAuthResponse()
  }

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
