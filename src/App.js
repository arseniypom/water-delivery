import React from 'react';
import {Header, Categories, Cart} from './components'
import {Showcase, Register, Login} from './pages';

function App() {
  const [cartActive, setCartActive] = React.useState(false);
  return (
    <>
      <Header setCartActive={setCartActive} />
      <Categories />
      <Showcase />
      <Cart active={cartActive} setActive={setCartActive} />
    </>
  );
}

export default App;
