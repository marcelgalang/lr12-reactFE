import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import UserPage from './components/users/UserPage';


export default (
  <Router>
    <div>
      <Route path="/users" component={UserPage} />
    </div>
  </Router>
);