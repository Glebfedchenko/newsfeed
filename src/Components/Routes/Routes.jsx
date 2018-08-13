import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import LoginRoute from './LoginRoute';

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <LoginRoute path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Layout>
  </Router>
);
export default Routes;
