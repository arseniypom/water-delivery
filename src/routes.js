import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Showcase, Auth} from './pages';


export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <Showcase />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Showcase />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}