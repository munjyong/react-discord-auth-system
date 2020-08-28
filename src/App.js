import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage, DashboardPage } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      <Route exact={true} path="/dashboard" component={DashboardPage} />
    </Switch>
  );
}

export default App;
