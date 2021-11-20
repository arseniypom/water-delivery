import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import {Showcase, ShowcaseEquipment, ShowcaseService, ShowcaseSale, Auth, UserProfile, OrderCheckout, EmptyPage} from './pages';


export const useRoutes = (isAuthenticated) => {

  return (
    <Switch>
      <Route path="/" exact>
        <Showcase />
      </Route>
      <Route path="/equipment">
        {/* <ShowcaseEquipment /> */}
        <EmptyPage />
      </Route>
      <Route path="/service">
        {/* <ShowcaseService /> */}
        <EmptyPage />
      </Route>
      <Route path="/sale">
        {/* <ShowcaseSale /> */}
        <EmptyPage />
      </Route>
      <Route path="/auth">
        {
          isAuthenticated ?
            <UserProfile />
            : <Auth />
        }
      </Route>
      <Route path="/checkout">
        {
          isAuthenticated ?
            <OrderCheckout />
            : <Auth />
        }
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}