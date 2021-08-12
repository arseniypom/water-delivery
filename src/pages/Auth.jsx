import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Login, Register} from '../components';
import waveImg from '../images/water-wave.png';

function Auth() {
  let match = useRouteMatch();

  return (
    <section className="container register-login-container">
      <Switch>
        <Route path={`${match.path}/register`}>
          <Register />
        </Route>
        <Route path={match.path} exact>
          <Login />
        </Route>
      </Switch>
      <div className="register-login-container__img">
        <img src={waveImg} alt="wave" />
      </div>
    </section>
  )
}

export default Auth
