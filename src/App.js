import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import { useRoutes } from './routes'
import {Header, Navigation, Cart} from './components'
import {Showcase, Auth} from './pages';

function App() {
  const {token, login, logout, userId, isReady} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  const [cartActive, setCartActive] = React.useState(false);
  return (
    <AuthContext.Provider value={{login, logout, token, userId, isAuthenticated}}>
      <Router>
        <Header setCartActive={setCartActive} />
        <Navigation />
        {/* <Switch>
          <Route path="/" exact>
            <Showcase />
          </Route>
          {
            !isAuthenticated &&
            <Route path="/auth">
              <Auth />
            </Route>
          }
          <Redirect to="/" />
        </Switch> */}
        {routes}
        <Cart active={cartActive} setActive={setCartActive} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
