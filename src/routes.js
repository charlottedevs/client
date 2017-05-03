import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './containers/ProtectedRoute';
import ChallengesContainer from './containers/ChallengesContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import AccountContainer from './containers/AccountContainer';
import SettingsContainer from './containers/SettingsContainer';
import Layout from './Layout';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />

        <ProtectedRoute path="/users/:user_id" component={AccountContainer} />
        <ProtectedRoute path="/settings" component={SettingsContainer} />
        <ProtectedRoute path="/challenges" component={ChallengesContainer} />
        <ProtectedRoute path="/leaderboard" component={LeaderboardContainer} />

        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
