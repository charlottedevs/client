import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './containers/ProtectedRoute';
import ChallengesContainer from './containers/ChallengesContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import Layout from './Layout';
import Account from './components/Account';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />

        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/challenges" component={ChallengesContainer} />
        <ProtectedRoute path="/leaderboard" component={LeaderboardContainer} />

        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
