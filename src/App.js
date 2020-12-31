import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Users from './user/pages/Users';
// import NewArt from './arts/pages/NewArt';
// import UpdateArt from './arts/pages/UpdateArt';
// import UserArts from './arts/pages/UserArts';
// import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

const Users = React.lazy(() => import('./user/pages/Users'));
const NewArt = React.lazy(() => import('./arts/pages/NewArt'));
const UpdateArt = React.lazy(() => import('./arts/pages/UpdateArt'));
const UserArts = React.lazy(() => import('./arts/pages/UserArts'));
const Auth = React.lazy(() => import('./user/pages/Auth'));

const App = () => {

  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
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
        <Redirect to="/" />
    </Switch>
    );
  }
  else
  {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/arts" exact>
          <UserArts />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense fallback={<div className="center"> <LoadingSpinner/> </div>}>
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;