import axios from 'axios';
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

  // Protected route component
  const ProtectedRoute = ({ 
    component: Component, 
    isAuth: isAuthenticated, 
    ...rest 
  }) => {
    return <Route />
  }
  
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
        'redirect_uri': 'http://localhost:3003/dashboard',
        'scope': 'identify email'
      })
    }
    
    await fetch('https://discord.com/api/oauth2/token', options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("🚀 ~ https://discord.com/api/oauth2/token response", response)
      return response;
    })
    .then((response) => {
      // OPTIONAL TODO: Find a way make the GET request working with Fetch for consistency 
      axios.get('https://discordapp.com/api/users/@me',
        {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        }
      )
      .then(user => {
        console.log('🚀 ~ User data', user.data)
        setIsAuthenticated(true)
      })
    })
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
