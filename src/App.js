import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import UserPage from './components/users/UserPage';
import UserDetail from './components/users/UserDetail';
const App = () => (
  <Router >
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/users" component={UserPage} />
        <Route  path="/users/:userId" component={UserDetail} />
      </Switch>
    </div>
  </Router>
)

export default App;
