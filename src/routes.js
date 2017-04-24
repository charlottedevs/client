import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './containers/ProtectedRoute';
import ContentContainer from './containers/ContentContainer';
import Account from './components/Account';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ContentContainer} />
      <Route path="/login" component={Login} />

      <ProtectedRoute path="/account" component={Account} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
