import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Register from "./Components/Register";
import Account from "./Components/Account";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/register" component={Register} />
    <Route path="/account" component={Account} />
  </Switch>
);
