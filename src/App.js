import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewArt from './arts/pages/NewArt';
import UpdateArt from './arts/pages/UpdateArt';
import UserArts from './arts/pages/UserArts';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/arts" exact>
            <UserArts />
          </Route>
          <Route path="/arts/new" exact>
            <NewArt />
          </Route>
          <Route path="/arts/:artId">
            <UpdateArt />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
