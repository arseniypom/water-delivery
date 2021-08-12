import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Header, Categories, Cart} from './components'
import {Showcase, Auth} from './pages';

function App() {
  const [cartActive, setCartActive] = React.useState(false);
  return (
    <Router>
      <Header setCartActive={setCartActive} />
      <Categories />
      <Switch>
        <Route path="/" exact>
          <Showcase />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
      <Cart active={cartActive} setActive={setCartActive} />
    </Router>
  );
}

export default App;
