import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import { useRoutes } from './routes'
import {Header, Navigation, Cart} from './components'

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  const [cartActive, setCartActive] = React.useState(false);
  return (
    <AuthContext.Provider value={{login, logout, token, userId, isAuthenticated}}>
      <Router>
        <Header setCartActive={setCartActive} />
        <Navigation />
        {routes}
        <Cart active={cartActive} setActive={setCartActive} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
