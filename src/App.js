import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import UsersPage from './components/users/UsersPage';
import UserPage from './components/users/UserPage';
const App = () => (
  <Router >
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/users" component={UsersPage} />
        <Route  path="/users/:userId" component={UserPage} />
      </Switch>
    </div>
  </Router>
)

export default App;
