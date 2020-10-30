import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewArt from './arts/pages/NewArt';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/arts/new" exact>
          <NewArt />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
